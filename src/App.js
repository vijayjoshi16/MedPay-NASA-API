import './App.css';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import FrontBanner from './components/FrontBanner/FrontBanner';

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
      <FrontBanner />
    </AllContent>
  );
}

export default App;
