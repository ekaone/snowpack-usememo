import React, { useState, useEffect } from 'react'
import { Memoize } from './components'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Page has been open for <code>{count}</code> seconds
        </p>
        <hr />
        <Memoize />
      </header>
    </div>
  );
}

export default App;