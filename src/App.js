import './App.css';
import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';

function App() {
  const [hidePreloader, setHidePreloader] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const fadeOutTime = 2000;

  useEffect(() => {
    document.title = "My Portfolio";
  })

  // Set a timeout to hide the preloader after some time
  useEffect(() => {
    const id = setTimeout(() => {
      setHidePreloader(true);
    }, fadeOutTime);

    const id2 = setTimeout(() => {
      setShowPreloader(false);
    }, fadeOutTime + 1000);

    return () => {
      clearTimeout(id);
      clearTimeout(id2);
    }
  }, []);

  return (
    <div className="App">
      {showPreloader && <Preloader hidePreloader={hidePreloader} />}
      <section className="main">
        <h1 className='test'>Full Website here</h1>
      </section>
    </div>
  );
}

export default App;
