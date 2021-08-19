import React from 'react'
import { useSelector } from 'react-redux'
import { Badge } from 'antd'
import './TasksBadge.css'

export const TasksBadge = (day) => {
  const todos = useSelector((state) => state.todos.todos)

  const completedTasks = todos.filter((item) => {
    return (
      new Date(item.date.seconds * 1000).getDate() === day.day.getDate() &&
      new Date(item.date.seconds * 1000).getMonth() === day.day.getMonth() &&
      item.status === 'done'
    )
  })

  const pendingTasks = todos.filter((item) => {
    return (
      new Date(item.date.seconds * 1000).getDate() === day.day.getDate() &&
      new Date(item.date.seconds * 1000).getMonth() === day.day.getMonth() &&
      item.status === 'inprogress'
    )
  })

  return completedTasks.length || pendingTasks.length ? (
    <div className='badges-wrapper'>
      <Badge status='success' text={completedTasks.length} />
      <Badge status='default' text={pendingTasks.length} />
    </div>
  ) : null
}
