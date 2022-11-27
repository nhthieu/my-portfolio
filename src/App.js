import { useState, useEffect, useContext } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
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
        {/* <Home /> */}
        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;
