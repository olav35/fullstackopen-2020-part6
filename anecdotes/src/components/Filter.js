import React from 'react'
import { filterBy } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const Filter = (props) => {
  const updateFilter = (event) => {
    props.filterBy(event.target.value)
  }

  return (
    <span><strong>filter</strong> <input onChange={updateFilter} /></span>
  )
}

const mapDispatchToProps = {
  filterBy
}

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter)
export default ConnectedFilter