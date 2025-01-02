import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <p> The button was clicked {counter} times </p>
      <button onClick={ () => setCounter(counter+1)}> Increase me </button>
      <button onClick={ () => setCounter(counter-1)}> Decrease me </button>
    </div>
  );
}

export default App;
