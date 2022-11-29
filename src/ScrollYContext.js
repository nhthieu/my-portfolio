import { useState, useEffect, createContext } from 'react';
const ScrollYContext = createContext();

function ScrollYProvider({ children }) {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <ScrollYContext.Provider value={{ offsetY, setOffsetY }}>
      {children}
    </ScrollYContext.Provider>
  );
}

export { ScrollYContext, ScrollYProvider };