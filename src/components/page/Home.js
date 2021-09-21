import React, { Fragment } from 'react';
import Search from '../user/Search';
import User from '../user/User';

export const Home = () => {
  return (
    <div>
      <Fragment>
        <Search />
        <User />
      </Fragment>
    </div>
  );
};
