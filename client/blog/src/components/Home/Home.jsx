/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Home = (props) => {
  return (
    <>
      <h1>Home page</h1>
    </>
  )
};

Home.defaultProps = {
  location: {},
  logout: null,
  firstName: null,
  lastName: null,
  role: null,
  color: null,
  userId: null,
  avatar: null,
  isFullscreen: false,
  isPageLoading: false,
};

Home.propTypes = {
  location: PropTypes.object,
  logout: PropTypes.func,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  role: PropTypes.string,
  color: PropTypes.string,
  userId: PropTypes.string,
  avatar: PropTypes.string,
  isFullscreen: PropTypes.bool,
  selectResource: PropTypes.func.isRequired,
  unsubscribeDevice: PropTypes.func.isRequired,
  isPageLoading: PropTypes.bool,
};

export default Home;
