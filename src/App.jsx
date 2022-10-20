
import { useState } from 'react';
import './App.css';
import Footer from './Component/Footer/Footer';
import Scroll from './Component/Scroll/Scroll';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Artiste from './Component/Artiste/Artiste';
import Nft from './Component/Nft/Nft';
import Launch from './Component/Launch/Launch';
import Explore from './Component/Explore/Explore';
import Mint from './Component/Mint/Mint';
import Feature from './Component/Feature/Feature';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function App() {
 
  const [theme,setTheme] = useState('dark');
  const changeTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <div id={theme} className="App">
    <Scroll/>
    <Navbar changeTheme={changeTheme} currentTheme={theme}  />
    <Hero/>
    <Feature/>
    <Artiste/>
    <Nft/>
    <Mint/>
    <Explore/>
    <Launch/>
    <Footer/>

    </div>
  )
}

export default App;
