import React from 'react'
import { voteOn } from '../reducers/anecdoteReducer'
import { clearNotification } from '../reducers/notificationReducer'
import { useSelector, useDispatch } from 'react-redux'


const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const vote = (id, content) => {
    dispatch(voteOn(id, content))
    setTimeout(() => dispatch(clearNotification), 5000)
  }

  return (
    <div>
      {anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter))
                .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList