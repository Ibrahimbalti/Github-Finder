import axios from 'axios';
import React, { Component, Fragment } from 'react';
import './App.css';
import { Alert } from './components/layout/Alert';
import Navbar from './components/layout/Navbar';
import Search from './components/user/Search';
import User from './components/user/User';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About } from './components/page/About';
import Users from './components/user/Users';

class App extends Component {
  state = {
    users: [],
    loading: false,
    user: {},
    alert: null,
    repos: [],
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} & client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }

  // ...............Get all user data from Github API..................

  searchUser = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} & client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  // ...............Get individual user data from Github API and  this function call from userItem components..................

  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username} ? client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} & client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ user: res.data, loading: false });
  };

  // .......This repos called from the users.js component and display the latest Github repos of user..................
  getUserRepos = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:ascclient_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} & client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ repos: res.data, loading: false });
  };
  clearUsers = () => {
    this.setState({
      users: [],
      loading: false,
    });
  };

  render() {
    const { user, users, loading, repos } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />

          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              {/* // ..........Home routers.............. */}
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUser={this.searchUser}
                      clearUsers={this.clearUsers}
                      showClears={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <User loading={loading} users={users} />
                  </Fragment>
                )}
              ></Route>

              {/* // ..........About routers.............. */}
              <Route exact path="/about" component={About} />

              {/* // ..........About routers.............. */}
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <Users
                    {...props}
                    getUser={this.getUser}
                    user={user}
                    getUserRepos={this.getUserRepos}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
