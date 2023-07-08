import React from 'react';

import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';

function App() {

  const handleEventClick = (event) => {
    console.log(">>>you've just click51", event)
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Hello world with React</h3>
        <input
          type="text"
          value='Minh'
          onClick={(event) => handleEventClick(event)}
        />
        <button
          type="button"
          onClick={(event) => handleEventClick(event)}
        >
          Click Me
        </button>
      </header>
    </div>
  );
}

export default App;
