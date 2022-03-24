import { useEffect, useState } from 'react'
import './App.css';

function RocketLauncher() {
  let counter = 300000

  useEffect(() => {
    const countdown = () => console.log(counter -= 1)
    console.log(`Rocket launcher mounted and counter is at ${counter}`)
    let interval = setInterval(countdown, 1000);
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
