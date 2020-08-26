import React, { useEffect } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { useDispatch } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'


const App = () => {
  const dispatch = useDispatch()

  useEffect(async () => {
    const data = [
      {
        id: 1,
        content: 'dvorak is epic',
        votes: 3
      },
      {
        id: 2,
        content: 'qwerty is a tragedy',
        votes: 0
      }
    ]
    dispatch(initializeAnecdotes(data))
  }, [])

  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList/>
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  )
  }

export default App