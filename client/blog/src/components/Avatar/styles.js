/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const AvatarContainer = styled.div`
  border-radius: 50%;
  background-color: #d5dee8;
  height: 36px;
  width: 36px;
  -webkit-box-shadow: 0px 0px 1px 2px ${({ color }) => color || '#008bcf'};
  -moz-box-shadow: 0px 0px 1px 2px ${({ color }) => color || '#008bcf'};
  box-shadow: 0px 0px 1px 2px ${({ color }) => color || '#008bcf'};

  box-sizing: border-box;
  overflow: hidden;

  img {
    height: 36px;
    width: 36px;
  }
`;
