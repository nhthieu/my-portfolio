import { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import './App.css';

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    document.title = "My Portfolio";
  })

  const removePreloader = () => {
    setShowPreloader(false);
  }

  return (
    <div className="App">
      {
        showPreloader &&
        <Preloader
          timeToFadeOut={2000}
          removePreloader={removePreloader}
        />
      }
      <section className="main">
        <Header />
        <Home />
        <Element name="about">
          <About />
        </Element>

      </section>
    </div>
  );
}

export default App;
