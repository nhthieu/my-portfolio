import './App.css';
import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';

function App() {
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
        />}
      <section className="main">
        <h1 className='test'>Full Website here</h1>
      </section>
    </div>
  );
}

export default App;
