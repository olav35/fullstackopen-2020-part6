import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }

  const neutral = () => {
    store.dispatch({
      type: 'OK'
    })
  }

  const bad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }

  const resetStats = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }

  const totalVotes = () => store.getState().good + store.getState().bad + store.getState().ok
  const positivePercentage = () => store.getState().good / totalVotes() * 100
  const average = () => (store.getState().good - store.getState().bad) / totalVotes()
  const isFeedbackGiven = () => store.getState().good || store.getState().ok || store.getState().bad

  return (
    <div>
      <h2>Give feedback</h2>
      <button onClick={good}>good</button> 
      <button onClick={neutral}>neutral</button> 
      <button onClick={bad}>bad</button>
      <button onClick={resetStats}>reset stats</button>
      <h2>statistics</h2>
      {
        isFeedbackGiven() ? (
          <>
            <div>good {store.getState().good}</div>
            <div>neutral {store.getState().ok}</div>
            <div>bad {store.getState().bad}</div>
            <div>average {average()}</div>
            <div>positive {positivePercentage()} %</div>
          </>
        ) : 'No feedback given'
      }
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
