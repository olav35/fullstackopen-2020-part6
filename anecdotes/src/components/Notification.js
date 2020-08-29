import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(({notifications}) => notifications[notifications.length - 1])

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return notification === undefined ? null : (
    <div style={style}>
      {notification.content}
    </div>
  )
}

export default Notification