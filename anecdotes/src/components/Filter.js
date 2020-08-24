import React from 'react'
import { filterBy } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const Filter = () => {
  const dispatch = useDispatch()

  const updateFilter = (event) => {
    dispatch(filterBy(event.target.value))
  }

  return (
    <span><strong>filter</strong> <input onChange={updateFilter} /></span>
  )
}

export default Filter