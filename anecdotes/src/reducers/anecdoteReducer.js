import anecdoteService from '../services/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const reducer = (state = [], action) => {
  if(action.type === 'UPDATE_ANECDOTE') {
    const { id, newAnecdote } = action.data
    const newState = state.map(anecdote => anecdote.id === id ? newAnecdote : anecdote)
    newState.sort((leftAnecdote, rightAnecdote) => rightAnecdote.votes - leftAnecdote.votes)
    return newState
  } else if(action.type === 'NEW_ANECDOTE') {
    const anecdote = asObject(action.data.content)
    const newState = [...state, anecdote]
    return newState
  } else if(action.type === 'INIT_ANECDOTES'){
    return action.data
  } else {
    return state
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.create(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
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