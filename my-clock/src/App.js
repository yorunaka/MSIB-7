import './App.css';
import {useState} from 'react'
import {useEffect} from 'react'

function App() {
  const [clock, setClock] = useState()
  
  useEffect (() => {
    setInterval(() => {
      setClock(new Date().toLocaleTimeString())
    }, 1000)
    return () => {
      clearInterval()
    }
  }
  , [])
  return (
    <div className="App">
      <h1>My Clock</h1>
      <h1>{clock}</h1>
    </div>
  );
}

export default App;
