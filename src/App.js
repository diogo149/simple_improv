import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Emotions from './constants/Emotions';
import CanIGetA from './constants/CanIGetA';


function randomItem(items) {
  return items[Math.floor(Math.random()*items.length)];
}

// function OldApp() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const generators = {
  "Emotion": Emotions.combined,
  "Location": CanIGetA.locations,
  "Relationship": CanIGetA.relationships,
  "Word": CanIGetA.words
}

class GeneratorDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: randomItem(props.choices),
    };
  }

  refresh() {
    this.setState({value: randomItem(this.props.choices)})
  }

  render() {
    return (
      <div
        className="generator-display"
        onClick={() => this.refresh()}
      >
        <div className="generator-name">{this.props.name}:</div>
	<div className="generator-value">{this.state.value}</div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
	{Object.entries(generators).map(([name, choices]) => {
	    return <GeneratorDisplay name={name} choices={choices} />
	})}
      </header>
    </div>
  );
}

export default App;
