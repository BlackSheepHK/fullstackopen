import { useState } from 'react'

const Button = ({onClick, label}) => {
  return (
      <button onClick={onClick} >{label}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  console.log("No. of anedotes:", anecdotes.length)

  const getRandomAnedote = (min, max) => {
    let randomInt = selected
    while (randomInt === selected) {
      console.log("Current int", selected)
      randomInt = Math.floor(Math.random() * (max - min) + min)
      console.log("New int:", randomInt)
    }
    return setSelected(randomInt)
  }

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const addVoteToAnedote = (anedoteNumber) => {
    console.log(anedoteNumber)
    console.log("Before adding:", votes)
    const copy = [...votes]
    copy[anedoteNumber] += 1
    console.log("After adding:", copy)
    return setVotes(copy)
  }

  return (
    <div>
      <h1>Anedote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <div>
        <Button onClick={() => addVoteToAnedote(selected)} label="vote"/>
        <Button onClick={() => getRandomAnedote(0, anecdotes.length)} label="next anecdote"/>
      </div>
      <h1>Anedote with most votes</h1>
      <p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>
      <p>has {votes[votes.indexOf(Math.max(...votes))]} votes</p>
    </div>
  )
}

export default App