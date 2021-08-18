import React, { useState } from 'react'
import './Calendar.css'
import { CalendarItem } from './CalendarItem'

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

  return (
    <div className='calendar_wrapper'>
      {daysValues.map((item, index) => (
        <CalendarItem key={index} day={item} today={today} />
      ))}
    </div>
  )
}
