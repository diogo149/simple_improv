import React from 'react';
import logo from './logo.svg';
import './App.css';
import Emotions from './constants/Emotions';
import CanIGetA from './constants/CanIGetA';


function randomItem(items) {
  return items[Math.floor(Math.random()*items.length)];
}

function OldApp() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
	Emotion (1): {randomItem(Emotions.level1)}
	<br/>
	<br/>
	Emotion (2): {randomItem(Emotions.level2)}
	<br/>
	<br/>
	Emotion (3): {randomItem(Emotions.level3)}
	<br/>
	<br/>
	Location: {randomItem(CanIGetA.locations)}
	<br/>
	<br/>
	Relationship: {randomItem(CanIGetA.relationships)}
	<br/>
	<br/>
	Word: {randomItem(CanIGetA.words)}
      </header>
    </div>
  );
}

export default App;
