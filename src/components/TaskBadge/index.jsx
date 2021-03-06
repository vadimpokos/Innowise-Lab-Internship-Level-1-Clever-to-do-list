import React from 'react'
import { useSelector } from 'react-redux'
import { Badge } from 'antd'
import './styles.css'
import { dateCompare } from '../../utils/dateCompare'

const TasksBadgeComponent = (day) => {
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

export const TasksBadge = React.memo(TasksBadgeComponent)
