import { useState, useEffect, useContext } from 'react';

import classNames from 'classnames';
import { ThemeContext } from './ThemeContext';


import Preloader from './components/Preloader';
import Header from './components/Header';
import Social from './components/Social';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';

import './App.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const theme = useContext(ThemeContext).theme;
  const backgroundClass = classNames({
    "bg--content": true,
    "bg--light": theme === "light",
    "bg--dark": theme === "dark",
  });

  const removePreloader = () => setShowPreloader(false);
  const resetScrollBar = () => window.scrollTo(0, 0);

  // Change web title
  useEffect(() => {
    document.title = "My Portfolio";
  })

  useEffect(() => {
    window.addEventListener('unload', resetScrollBar);
    return () => {
      window.removeEventListener('unload', resetScrollBar);
    }
  }, [])

  return (
    <div className="App" data-theme={theme}>
      {
        showPreloader &&
        <Preloader
          timeToFadeOut={2000}
          removePreloader={removePreloader}
        />
      }
      <Header />
      <div className='main'>
        <div className="bg">
          <span className={backgroundClass}></span>
        </div>
        <Social />
        <Home />
        <About />
        <Skills />
      </div>
    </div>
  );
}

export default App;
