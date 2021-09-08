import React from 'react'
import { useSelector } from 'react-redux'
import { Todo } from './ToDoItem/ToDo'
import { dateCompare } from '../utils/DateCompare'

export const ToDoList = () => {
  const todos = useSelector((state) => state.todos.todos)

  const date = useSelector((state) => state.date)

  return (
    <>
      {todos.map((item) => {
        return dateCompare(item.date.seconds, date.selectedDate) ? (
          <Todo key={item.id} todo={item} />
        ) : null
      })}
    </>
  )
}
