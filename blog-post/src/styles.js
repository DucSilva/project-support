import styled from 'styled-components';

export const AppContainer = styled.div`
  font-family: 'Proxima Nova Regular';
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