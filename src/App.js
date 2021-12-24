import './App.css';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import FrontBanner from './components/FrontBanner/FrontBanner';
import About from './components/About/About';
import Asteroids from './components/Asteroids/Asteroids';

const AllContent = styled.div`
  text-align: center;
  background-color: #2e0e65;
  color: white;
`

function App() {
  return (
    <AllContent>
      <Navbar />
      <FrontBanner />
      <About />
      <Asteroids />
      <a href="https://www.freepik.com/vectors/background">Background vector created by freepik - www.freepik.com</a>
      <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </AllContent>
  );
}

export default App;
