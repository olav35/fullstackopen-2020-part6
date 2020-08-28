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
  if(action.type === 'VOTE') {
    const anecdote = state.find(({id}) => id === action.data.id)
    const newAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
    const newState = state.map(anecdote => anecdote.id === action.data.id ? newAnecdote : anecdote)
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

export const createAnecdote = (anecdote) => ({
  type: 'NEW_ANECDOTE',
  data: anecdote
})

export const voteOn = (id, content) => ({
  type: 'VOTE',
  data: { id, content }
})

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