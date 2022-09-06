import { useState } from 'react'


const Statistics = (props) => {
  return (
    <>
          <p>{props.name} {props.number}</p>
    </>
  )
}


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
      <Statistics name={"Good: "} number={good} />
      <Statistics name={"Neutral: "} number={neutral} />
      <Statistics name={"bad: "} number={bad} />
      <Statistics name={"All: "} number={good + neutral + bad} />
      <Statistics name={"Average: "} number={(good - bad) /(good + bad + neutral)} />
      <Statistics name={"Positive: "} number={(good)/(bad+good+neutral)*100} />
    </div>
  )
}

export default App