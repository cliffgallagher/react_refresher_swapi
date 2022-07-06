import React, {useState} from 'react';
import './App.css';
import SwapiForm from './components/SwapiForm';
import InfoDisplay from './components/InfoDisplay';

function App() {

  const [results, setResults] = useState();

  const receiveFromSwapiForm = (info) => {
    console.log('info in app: ' + JSON.stringify(info));
  }

  return (
    <div className="App">
      <SwapiForm receiveFromSwapiForm={receiveFromSwapiForm}/>
      <InfoDisplay results={results}/>
    </div>
  );
}

export default App;
