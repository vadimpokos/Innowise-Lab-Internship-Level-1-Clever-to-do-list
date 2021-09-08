import React from 'react'
import { Card, Tag } from 'antd'
import { useDispatch } from 'react-redux'
import { changeDate } from '../redux/dateReducer/actions'
import { TasksBadge } from './TaskBadge/TasksBadge'
import { WEEK_DAYS, MONTH_NAMES } from './Constants'

export const CalendarItem = (day) => {
  const dispatch = useDispatch()

  const handleItemClick = () => {
    dispatch(changeDate(day.day))
  }

  return (
    <Card className='calendar-item' onClick={handleItemClick}>
      <Card.Meta
        title={day.day.getDate()}
        description={MONTH_NAMES.find(
          (_, index) => index === day.day.getMonth()
        )}
      />
      <div>{WEEK_DAYS.find((_, index) => index === day.day.getDay())}</div>
      <TasksBadge day={day.day} />
      {day.day.getDate() === day.today.getDate() &&
      day.day.getMonth() === day.today.getMonth() ? (
        <Tag color='purple'>Today</Tag>
      ) : null}
    </Card>
  )
}
