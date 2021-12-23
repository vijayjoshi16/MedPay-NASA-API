import './App.css';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';

const AllContent = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #2e0e65;
  color: white;
`

function App() {
  return (
    <AllContent>
      <Navbar />
    </AllContent>
  );
}

export default App;
