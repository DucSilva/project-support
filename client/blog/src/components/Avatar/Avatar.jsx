/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { AvatarContainer } from './styles';

const Avatar = (props) => {
  const { src, color } = props;

  return (
    <AvatarContainer className="avatar" color={color}>
      <img src={src || require('../../common/images/user.png')} alt="user" />
    </AvatarContainer>
  );
};

Avatar.defaultProps = {
  color: null,
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Avatar;
