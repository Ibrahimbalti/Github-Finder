import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducers from './githubReducers';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USERS,
  GET_REPOS,
} from '../types';

let githubClientid;
let githubClientSecret;
if (process.env.NODE_ENV !== 'production') {
  githubClientid = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientid = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}
const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducers, initialState);

  // ...............Get all user data from Github API..................

  const searchUser = async (text) => {
    setloading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientid} & client_secret=${githubClientSecret}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  // ...............Get individual user data from Github API and  this function call from userItem components..................

  const getUser = async (username) => {
    setloading();
    const res = await axios.get(
      `https://api.github.com/users/${username} ? client_id=${githubClientid} & client_secret=${githubClientSecret}`
    );
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  };

  // .......This repos called from the users.js component and display the latest Github repos of user..................
  const getUserRepos = async (username) => {
    setloading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:ascclient_id=${githubClientid} & client_secret=${githubClientSecret}`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  // ......Set Loading...........
  const setloading = () => dispatch({ type: SET_LOADING });

  //..............clear user...........
  const clearUsers = () => dispatch({ type: CLEAR_USERS });
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUser,
        getUser,
        clearUsers,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
