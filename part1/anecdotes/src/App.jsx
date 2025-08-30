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
  const [votes,setVotes] = useState({0:1,1:3,2:5,3:7,4:9,5:11,6:13,7:15})
  const handleVote=()=>{
    console.log(votes,"se hizo 1 click")
    setVotes(p=>({...p,[selected]:p[selected]+1}))
    
  }

  return (
    <div>
      {anecdotes[selected]}
      <br />
      <p>has {votes[selected]} votes</p>
      <br />
      <Button onClick={handleVote} text ="vote"/>
      
      <Button onClick ={handleClick} text='Next anecdote'/>
    </div>
  )
}

export default App