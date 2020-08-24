const reducer = (state = '', action) => {
  if(action.type === 'FILTER') {
    return action.data.filter.toLowerCase()
  } else {
    return state
  }
}

export const filterBy = (filter) => ({
  type: 'FILTER',
  data: { filter }
})

export default reducer