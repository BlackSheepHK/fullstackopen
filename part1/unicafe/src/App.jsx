import { useState } from 'react'

const Button = ({onClick, label}) => {
  return (
      <button onClick={onClick} >{label}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const average = (good, neutral, bad) => {
    if (good + neutral + bad === 0) {
      return 0
    }
    return ((good - bad)/(good + neutral + bad)).toFixed(2)
  }

  const positivePercentage = (good, neutral, bad) => {
    if (good + neutral + bad === 0) {
      return 0
    }
    return String((100 * good/(good + neutral + bad)).toFixed(1)) + "%"
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
      <table>
        <tbody>
          <StatisticLine text="good" value={good}/>
          <StatisticLine text="neutral" value={neutral}/>
          <StatisticLine text="bad" value={bad}/>
          <StatisticLine text="all" value={good + neutral + bad}/>
          <StatisticLine text="average" value={average(good, neutral, bad)}/>
          <StatisticLine text="positive" value={positivePercentage(good, neutral, bad)}/>
        </tbody>
      </table>
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