import styled from 'styled-components';

export const WrapperContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Proxima Nova Regular';
  // background-color: #00e1ff42;
  background-image: url("./background.jpg");
`;

export const AppContainer = styled.div`
  display: flex;
  flex-flow: column;
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  z-index: 1;
  @media print {
  .ignore-print {
    display: none;
  }
}
`;