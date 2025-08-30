import { useState } from 'react'

const Button =({onClick ,text})=>{
  return(
    <button onClick={onClick}>{text}</button>
  )
  
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  
  const handleClick =() =>{
    const r = Math.floor(Math.random() * anecdotes.length)
    setSelected(r)
  }
  const [votes,setVotes] = useState(new Array(anecdotes.length).fill(0))
  const handleVote=()=>{
    console.log(votes,"se hizo 1 click")
    setVotes(p=>p.map((vote, index) => index === selected ? vote + 1 : vote))
  }

  let maxVotes = 0
  let topIndices =[]
  for (let i = 0; i < votes.length; i++) {
    if (votes[i] > maxVotes) {
      maxVotes = votes[i]
    }
  }
  for(let i =0 ;i<votes.length;i++){
    if(votes[i]===maxVotes){
      topIndices.push(i)
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      <p>has {votes[selected]} votes</p>
      <br />
      <Button onClick={handleVote} text ="vote"/>
      <Button onClick ={handleClick} text='Next anecdote'/>
      <br />
      <h2>Anecdote with most votes</h2>
      {maxVotes ===0 ? (<p>No votes</p>):(topIndices.map(i => (
        <div key={i}>
          <p>{anecdotes[i]}</p>
          <p>has {votes[i]} votes</p>
        </div>
      ))
    )}
    </div>
  )
}

export default App