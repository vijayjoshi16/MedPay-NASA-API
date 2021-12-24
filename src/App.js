import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import FrontBanner from './components/FrontBanner/FrontBanner';
import About from './components/About/About';
import Asteroids from './components/Asteroids/Asteroids';
import DatewiseAsteroids from './components/DatewiseAsteroids/DatewiseAsteroids';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';

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
      <DatewiseAsteroids />
      <Search />
      <Footer />
    </AllContent>
  );
}

export default App;
