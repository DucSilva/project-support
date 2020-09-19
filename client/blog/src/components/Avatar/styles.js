import styled from 'styled-components';

export const AvatarContainer = styled.div`
  border-radius: 50%;
  background-color: #d5dee8;
  height: 42px;
  width: 42px;
  border: 3px solid ${props => props.color || '#008bcf'};
  box-sizing: border-box;
  overflow: hidden;

  img {
    height: 36px;
    width: 36px;
  }
`;
