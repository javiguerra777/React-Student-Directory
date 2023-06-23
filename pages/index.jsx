import styled from 'styled-components';
import Application from '../src/App';

const AppWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: auto;
  button:hover {
    cursor: pointer;
  }
`;

export default function App() {
  return (
    <AppWrapper>
      <Application />
    </AppWrapper>
  )
}