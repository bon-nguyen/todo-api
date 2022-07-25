import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './features/board/index';

function App() {
console.log(<div/>)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Learn React
      </header>
      <Board />
    </div>
  );
}

export default App;
