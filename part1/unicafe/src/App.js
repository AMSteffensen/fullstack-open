import { useState } from 'react'



const Button = (props) => { 
  console.log(props)
  const { onClick, text } = props
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const All = (props) => {
  
  if (props.number <= 0) {
  return (
    <div>
      All: 0 
    </div>
  ) }
  
  return (
    <div>
      All: {props.number +1}
    </div>
  )
}


   



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const increaseGoodByOne = () => {
    setGood(good + 1)
    console.log(good * 100 / all)
    setAll((good + neutral + bad))
    setAverage(all - bad / 3)
    setPositive((good / all + 1) * 100)
  
  }

  const increaseNeutralByOne = () => {
    setNeutral(neutral + 1)
 
    setAll((good + neutral + bad))
    setAverage(all - bad / 3)
    setPositive((good / all + 1) * 100)
 
   
  }

  const increaseBadByOne = () => {
    setBad(neutral + 1)
 
    setAll((good + neutral + bad))
    setPositive((good / all + 1) * 100)
   
  }

  // const calculateAverage = () => {
  //   setAverage(good + average - bad / 3)
 
  //   setAll((good + neutral + bad))
  //   console.log(all)
  // }

  // const calculatePosetive = () => {
  //   setBad(bad + 1)
 
  //   setPositive((good + neutral + bad))
  //   console.log(all)
  // }
  // }
  // const increaseNeutralByOne = () => setNeutral(neutral + 1)
  // const increaseBadByOne = () => setBad(bad + 1)

  const setToValue = all => {
    console.log('value now', all)
    setAll(all)
  }
  
  return (
    <div>
      <h1>Give feedback</h1>

      <button onClick={()=>increaseGoodByOne()}>Good</button>
      <button onClick={()=>increaseNeutralByOne()}>Neutral</button>
      <button onClick={()=>increaseBadByOne()}>Bad</button>
{/* 
      <Button handleClick={() => setToValue(increaseGoodByOne)} text="Good" />
      <Button handleClick={() => setToValue(increaseNeutralByOne)} text="Neutral" />
      <Button handleClick={() => setToValue(increaseBadByOne)} text="Bad" /> */}

      <h2>Stats</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <All number={all} />
      <p>Average: {average}</p>
      <p>Positive: {positive}</p>
    </div>
  )
}

export default App