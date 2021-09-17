import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUser: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClears: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onchange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please Enter a user name', 'light');
    } else {
      this.props.searchUser(this.state.text);
      this.setState({ text: '' });
    }
  };
  render() {
    const { showClears, clearUsers } = this.props;
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search users"
            onChange={this.onchange}
            value={this.state.text}
          />
          <input
            type="submit"
            className="btn btn-dark btn-block"
            value="Search"
          />
        </form>

        {showClears && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
