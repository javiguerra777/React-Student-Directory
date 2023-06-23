import styled from 'styled-components';
import MainForm from './components/MainForm';

const Wrapper = styled.div`
    height: auto;
    width: 100vw;
`;
export default function App() {
  return(
  <Wrapper>
    <MainForm/>
  </Wrapper>
  );
}
