import { useState } from 'react'

const Button = ({onClick, label}) => {
  return (
      <button onClick={onClick} >{label}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const average = (good, neutral, bad) => {
    if (good + neutral + bad === 0) {
      return 0
    }
    return (good - bad)/(good + neutral + bad)
  }
  const positivePercentage = (good, neutral, bad) => {
    if (good + neutral + bad === 0) {
      return 0
    }
    return 100 * good/(good + neutral + bad)
  }
  if (good + neutral + bad === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {average(good, neutral, bad)}</p>
      <p>positive {positivePercentage(good, neutral, bad)}%</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={()=>setGood(good+1)} label="good" />
      <Button onClick={()=>setNeutral(neutral+1)} label="neutral" />
      <Button onClick={()=>setBad(bad+1)} label="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App