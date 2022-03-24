import { useEffect, useState } from 'react'
import './App.css';

function RocketLauncher() {
  let counter = 300000

  useEffect(() => {
    const countdown = () => console.log(counter -= 1)
    console.log(`Rocket launcher mounted and counter is at ${counter}`)
    let interval = setInterval(countdown, 1000);

    return () => {
      console.log('Rocket launcher unmounted');
      clearInterval(interval)
    }
  })

  return (
    <div>
      Rocket launcher is counting down
    </div>
  )
}

function App() {
  let [launch, setLaunch] = useState(true)

  const handleChange = (e) => {
    console.log(`handleChange called with value: ${e.target.value}`)
  }

  return (
    <div className="App">
      <main>
        <h1>Learning Cleanup!</h1>
        <button onClick={() => setLaunch(!launch)}>
          {launch ? "Abort Rocket Launch" : "Start Rocket Launch"}
        </button>
        <input type="text" onChange={handleChange} />
        {launch ? <RocketLauncher /> : null}
      </main>
    </div>
  );
}

export default App;
