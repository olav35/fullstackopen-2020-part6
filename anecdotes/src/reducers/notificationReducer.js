// Last notification in state is the one to be displayed
const reducer = (state = [], action) => {
  if(action.type === 'ADD_NOTIFICATION') {
    const { notification } = action.data
    return [...state, notification]
  } else if(action.type === 'DELETE_NOTIFICATION') {
    const { id } = action.data 
    return state.filter(notification => notification.id !== id)
  } else {
    return state
  }
}

const getId = _ => Math.floor(Math.random() * 1000000000)

export const setNotification = (content, milis = 5000) => {
  return async dispatch => {
    const id = getId()
    dispatch({
      type: 'ADD_NOTIFICATION',
      data: { notification: { content, id } }
    })
    setTimeout(() => {
      dispatch({
        type: 'DELETE_NOTIFICATION',
        data: { id }
      })
    }, milis)
  }
}

export default reducer