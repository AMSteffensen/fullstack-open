import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return(
    <button onClick={handleClick}>
    {text}
  </button>
  )
}

const StatisticLine = (props) => {
  if (props.number === 0 && props.name === true ) {
    return (
      <></>
    )
  }
  if (props.number === 0 ) {
    return (
      <></>
    )
  }
  if (isNaN(props.number )  ) {
    return (
      <></>
    )
  }
  return (
    <>
    <table>
    <tr>
      <th>{props.text}</th>
      <td> {props.number} </td>
      </tr>
    </table>
      </>
  )
}


 
const Statistics = (props) => {
  return ( 
    <>
          <StatisticLine text={"good"} number={props.good} />
          <StatisticLine text={"bad"} number={props.neutral} />
          <StatisticLine text={"neutral"} number={props.bad} />
          <StatisticLine text={"All"} number={props.all} />
          <StatisticLine text={"Average"} number={props.average} />
          <StatisticLine text={"Positive"} number={props.positive} />
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
      <Button handleClick={increaseGoodByOne} text="Good" />
      <Button handleClick={increaseNeutralByOne} text="Neutral" />
      <Button handleClick={increaseBadByOne} text="Bad" />
      
      <h2>Stats</h2>
      <Statistics  good={good} 
      neutral={neutral} bad={bad} 
      average={(good - bad) /(good + bad + neutral)} 
      positive={(good)/(bad+good+neutral)*100} />
    </div>
  )
}

export default App