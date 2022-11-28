import { useState, useEffect, useContext } from 'react';
import classNames from 'classnames';
import { ThemeContext } from './ThemeContext';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Social from './components/Social';
import './App.css';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const theme = useContext(ThemeContext).theme;
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  const resetScrollBar = () => window.scrollTo(0, 0);
  const backgroundClass = classNames({
    "bg--content": true,
    "bg--light": theme === "light",
    "bg--dark": theme === "dark",
  });

  // Change web title
  useEffect(() => {
    document.title = "My Portfolio";
  })

  // Add scroll event listener
  // Reset scroll bar to top when page is unloaded
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener("unload", resetScrollBar);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener("unload", resetScrollBar);
    }
  }, [])

  const removePreloader = () => {
    setShowPreloader(false);
  }

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
      </div>
    </div>
  );
}

export default App;
