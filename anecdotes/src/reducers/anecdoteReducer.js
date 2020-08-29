import anecdoteService from '../services/anecdotes'

const sortAnecdotes = anecdotes => [...anecdotes].sort((leftAnecdote, rightAnecdote) => rightAnecdote.votes - leftAnecdote.votes)

const reducer = (state = [], action) => {
  if(action.type === 'UPDATE_ANECDOTE') {
    const { id, newAnecdote } = action.data
    const newState = state.map(anecdote => anecdote.id === id ? newAnecdote : anecdote)
    return sortAnecdotes(newState)
  } else if(action.type === 'NEW_ANECDOTE') {
    const { newAnecdote } = action.data
    return sortAnecdotes([...state, newAnecdote])
  } else if(action.type === 'INIT_ANECDOTES'){
    return sortAnecdotes(action.data)
  } else {
    return state
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.create(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: { newAnecdote }
    })
  }
}

export const voteOn = (id, anecdote) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.update(id, { ...anecdote, votes: anecdote.votes + 1 })
    dispatch({
      type: 'UPDATE_ANECDOTE',
      data: {
        id,
        newAnecdote
      }
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export default reducer