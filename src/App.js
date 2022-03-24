import {useState} from 'react'
import './App.css';

function RocketLauncher() {
  return (
    <div>
      RocketLauncher
    </div>
  )
}

function App() {
  let [launch, setLaunch] = useState(true)
  return (
    <div className="App">
      <main>
        <h1>Learning Cleanup!</h1>
        <button>
          Start Rocket Launch
        </button>
        <RocketLauncher />
      </main>
    </div>
  );
}

export default App;
 