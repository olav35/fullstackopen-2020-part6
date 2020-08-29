// I believe this is what was referred to as the message
const reducer = (state = null, action) => {
  if(action.type === 'UPDATE_ANECDOTE') {
    const { newAnecdote } = action.data
    return `You updated "${newAnecdote.content}"`
  } else if(action.type === 'NEW_ANECDOTE') {
    return `You added "${action.data.newAnecdote.content}"`
  } else if(action.type === 'CLEAR_NOTIFICATION') {
    return null
  } else {
    return state
  }
}

export const clearNotification = {
  type: 'CLEAR_NOTIFICATION'
}

export default reducer