import { useState } from 'react'

const Statistics =(props)=>{
  const total = props.good + props.neutral + props.bad
  const average = total ==0 ? 0: (props.good - props.bad) / total
  const positive = total ==0 ? 0: (props.good * 100) / total
  return (
    <div>
      <h2>statistics</h2>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  )

}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics good={good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App