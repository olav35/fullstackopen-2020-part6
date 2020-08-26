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
  } else if(action.type === 'INITIALIZE_ANECDOTES'){
    return action.data
  } else {
    return state
  }
}

export const createAnecdote = (content) => ({
  type: 'NEW_ANECDOTE',
  data: { content }
})

export const voteOn = (id, content) => ({
  type: 'VOTE',
  data: { id, content }
})

export const initializeAnecdotes = (data) => ({
  type: 'INITIALIZE_ANECDOTES',
  data
})

export default reducer