import React from 'react'
import { useSelector } from 'react-redux'
import { Todo } from '../ToDoItem'
import { dateCompare } from '../../../utils/DateCompare'

const ToDoListComponent = () => {
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

export const ToDoList = React.memo(ToDoListComponent)
