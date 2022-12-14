import { useState, useEffect, useContext } from 'react';

import classNames from 'classnames';
import { ThemeContext } from './ThemeContext';


import Preloader from './components/Preloader';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
// import Social from './components/Social';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const theme = useContext(ThemeContext).theme;
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
          timeToFadeOut={1800}
          removePreloader={removePreloader}
        />
      }
      <div className="overlay"></div>
      {/* <Header /> */}

      {/* Main section of website */}

      <div className="bg">
        <span className="bg__content"></span>
      </div>

      <Sidebar />
      <div className='main'>
        {/* <Social /> */}
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div >
  );
}

export default App;
