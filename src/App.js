import './App.css';
import {useState} from 'react';

function App() {

  const [heartRate, setheartRate] = useState();
  const [Age, setAge] = useState();
  const [upperRate, setupperRate] = useState();
  const [lowerRate, setlowerRate] = useState();

  function calculate() {
    setupperRate((220-Age)*0.85);
    setlowerRate((220-Age)*0.65);
  }

  return (
    <div>
      <h3>Heart rate limits calculator</h3>
      <form>
        <div>
          <label>Age </label>
          <input type="number" value= {Age} onChange={e=> setAge(e.target.value)} />
        </div>
        <div>
          <label>Heart rate limits </label>
          <output>{lowerRate}-{upperRate}</output>
        </div>
        <button type="button" onClick={calculate}>Calculate</button>
      </form>
    </div>
  );
}

export default App;
