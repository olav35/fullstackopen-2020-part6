// I believe this is what was referred to as the message
const reducer = (state = null, action) => {
  if(action.type === 'VOTE') {
    return `You voted on "${action.data.content}"`
  } else if(action.type === 'NEW_ANECDOTE') {
    return `You added "${action.data.content}"`
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