import { useState } from 'react'

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] =  useState(anecdotes.map(text => ({ text, votes: 0 })))


  const handleClick = () => {
    let n = Math.floor(Math.random() * 6) + 1;
    setSelected(n)
  }

  const handleVote = () => {
    const votes = [...points]
    votes[selected].votes += 1
    setPoints(votes);
  }

  return (
    <>
    <h1>Daily anecdotes</h1>
      <div>"{anecdotes[selected]}"</div>
      <ShowVotes points={points} selected={selected} />
    <div>  
      <br />
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
    </div>
    <MostVotes votes={points} anecdotes={anecdotes} />
    </>
  );
}

const ShowVotes = ({points, selected}) => {
  let numVotes = points[selected]
  if (numVotes == null) {
    numVotes = 0
  }
  return (
    <div> has {numVotes.votes} votes.</div>
  )
}

const MostVotes = ({votes, anecdotes}) => {
  let mostVotes = (Math.max(...votes.map(o => o.votes)))
  const indexes = [];

  console.log(indexes)

  for (let index = 0; index < votes.length; index++) {
    if (votes[index].votes === mostVotes) {
      indexes.push(index);
    }
  }

  if (mostVotes === 0) {
    return(<></>)
  }
  
  if(indexes.length > 1) {
    return(
      <><p>We have a tie between annectdotes {indexes.join(' , ')} </p></>
    )
  }

  return (
    <>
    <p>"{anecdotes[indexes]}"</p>
    <p> has {mostVotes} votes. </p>
    </>
  )
  
}


export default App;
