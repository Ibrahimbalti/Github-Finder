import React from 'react';
import PropTypes from 'prop-types';
import { RepoItems } from './RepoItems';

export const Repos = ({ repos }) => {
  return repos.map((repo) => <RepoItems repo={repo} key={repo.id} />);
};

Repos.prototype = {
  repo: PropTypes.array.isRequired,
};
