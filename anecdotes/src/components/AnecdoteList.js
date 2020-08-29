import React from 'react'
import { voteOn } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { connect, useDispatch } from 'react-redux'


const AnecdoteList = (props) => {
  const dispatch = useDispatch()
  const vote = (id, anecdote) => {
    dispatch(voteOn(id, anecdote))
    dispatch(setNotification(`Voted on "${anecdote.content}"`))
  }

  return (
    <div>
      {props.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(props.filter))
                .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  anecdotes: state.anecdotes,
  filter: state.filter
})

const ConnectedAnecdoteList = connect(mapStateToProps)(AnecdoteList)

export default ConnectedAnecdoteList