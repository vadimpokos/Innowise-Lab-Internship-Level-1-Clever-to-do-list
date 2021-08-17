import { Card, Tag } from 'antd'
import React, { useEffect, useState } from 'react'
import './Calendar.css'

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

export const Calendar = () => {
  const [today] = useState(new Date())
  const [lastDayToDisplay] = useState(new Date())

  lastDayToDisplay.setMonth(today.getMonth() + 1)

  const fillDays = () => {
    const days = []
    const day = new Date(today)
    do {
      days.push(new Date(day))
      day.setDate(day.getDate() + 1)
    } while (
      day.getMonth() !== lastDayToDisplay.getMonth() ||
      day.getDate() <= lastDayToDisplay.getDate()
    )
    return days
  }
  const daysValues = fillDays()

  useEffect(() => console.log(fillDays()))
  return (
    <div className='calendar_wrapper'>
      {daysValues.map((item, index) => {
        return (
          <Card key={index} className='calendar-item'>
            <Card.Meta
              title={item.getDate()}
              description={MONTH_NAMES.find(
                (_, index) => index === item.getMonth()
              )}
            />
            <div>{WEEK_DAYS.find((_, index) => index === item.getDay())}</div>
            {item.getDate() === today.getDate() &&
            item.getMonth() === today.getMonth() ? (
              <Tag color='purple'>Today</Tag>
            ) : null}
          </Card>
        )
      })}
    </div>
  )
}
