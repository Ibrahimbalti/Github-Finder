import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import User from './components/user/User';

class App extends Component {
  state = {
    user: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users');
    console.log(res.data);
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <User />
        </div>
      </div>
    );
  }
}

export default App;
