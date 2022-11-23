import './App.css';
import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    document.title = "My Portfolio";
  })

  // Set a timeout to hide the preloader after some time
  useEffect(() => {
    const id = setTimeout(() => {
      setShowPreloader(false);
    }, 3200);

    return () => {
      clearTimeout(id);
    }
  }, []);

  return (
    <div className="App">
      {
        showPreloader
          ? <Preloader />
          :
          <section className="main">
            <h1 className='test'>Full Website here</h1>
          </section>
      }
    </div>
  );
}

export default App;
