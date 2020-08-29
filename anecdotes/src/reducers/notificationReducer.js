// I believe this is what was referred to as the message
const reducer = (state = null, action) => {
  if(action.type === 'SET_NOTIFICATION') {
    return action.data.notification
  } else if(action.type === 'CLEAR_NOTIFICATION') {
    return null
  } else {
    return state
  }
}

export const setNotification = (notification, milis = 5000) => {
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: { notification }
    })
    setTimeout(() => {
      dispatch({
        type: 'CLEAR_NOTIFICATION'
      })
    }, milis)
  }
}

export default reducer