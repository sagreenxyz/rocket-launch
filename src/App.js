import { useEffect, useState } from 'react'
import './App.css';

function RocketLauncher() {
  let counter = 300000

  useEffect(() => {
    console.log(`Rocket launcher mounted and counter is at ${counter}`)
  })

  return (
    <div>
      Rocket launcher is counting down
    </div>
  )
}

function App() {
  let [launch, setLaunch] = useState(true)
  return (
    <div className="App">
      <main>
        <h1>Learning Cleanup!</h1>
        <button onClick={() => setLaunch(!launch)}>
          {launch ? "Abort Rocket Launch" : "Start Rocket Launch"}
        </button>
        {launch ? <RocketLauncher /> : null}
      </main>
    </div>
  );
}

export default App;
