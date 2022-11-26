import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import './App.css';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const theme = useContext(ThemeContext).theme;

  useEffect(() => {
    document.title = "My Portfolio";
  })

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
        <Home />
        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;
