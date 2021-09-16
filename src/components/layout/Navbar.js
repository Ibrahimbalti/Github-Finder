import React from 'react';
import { PropTypes } from 'prop-types';

const Navbar = (props) => {
  return (
    <nav className="navbar bg-primary text-right">
      <h1>
        <i className={props.icon}></i>
        {props.title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Navbar',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
