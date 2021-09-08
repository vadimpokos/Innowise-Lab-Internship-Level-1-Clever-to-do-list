import React from 'react'
import { useSelector } from 'react-redux'
import { Badge } from 'antd'
import './TasksBadge.css'
import { dateCompare } from '../../utils/DateCompare'

export const TasksBadge = (day) => {
  const todos = useSelector((state) => state.todos.todos)

  const completedTasks = todos.filter((item) => {
    return dateCompare(item.date.seconds, day.day) && item.status === 'done'
  })

  const pendingTasks = todos.filter((item) => {
    return (
      dateCompare(item.date.seconds, day.day) && item.status === 'inprogress'
    )
  })

  return completedTasks.length || pendingTasks.length ? (
    <div className='badges-wrapper'>
      <Badge status='success' text={completedTasks.length} />
      <Badge status='default' text={pendingTasks.length} />
    </div>
  ) : null
}
