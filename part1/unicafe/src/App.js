import { useState } from 'react'



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGoodByOne = () => {
    setGood(good + 1)
  }

  const increaseNeutralByOne = () => {
    setNeutral(neutral + 1)
  }

  const increaseBadByOne = () => {
    setBad(bad + 1)
  }
  
  return (
    <div>
      <h1>Give feedback</h1>

      <button onClick={()=>increaseGoodByOne()}>Good</button>
      <button onClick={()=>increaseNeutralByOne()}>Neutral</button>
      <button onClick={()=>increaseBadByOne()}>Bad</button>

      <h2>Stats</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All {good + neutral + bad}</p>
      <p>Average: {(good - bad) /(good + bad + neutral)}</p>
      <p>Positive: {(good)/(bad+good+neutral)*100} %</p>
    </div>
  )
}

export default App