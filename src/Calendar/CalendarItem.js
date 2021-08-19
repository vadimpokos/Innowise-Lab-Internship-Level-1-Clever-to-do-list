import React from 'react'
import { Card, Tag } from 'antd'
import { useDispatch } from 'react-redux'
import { changeDate } from '../redux/actions'
import { TasksBadge } from './TasksBadge'

const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTH_NAMES = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export const CalendarItem = (day) => {
  const dispatch = useDispatch()

  return (
    <Card
      className='calendar-item'
      onClick={() => dispatch(changeDate(day.day))}
    >
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
