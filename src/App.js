import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import { Alert } from './components/layout/Alert';
import Navbar from './components/layout/Navbar';
import Search from './components/user/Search';
import User from './components/user/User';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
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
  searchUser = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} & client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = () => {
    this.setState({
      users: [],
      loading: false,
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUser={this.searchUser}
            clearUsers={this.clearUsers}
            showClears={this.state.users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <User loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
