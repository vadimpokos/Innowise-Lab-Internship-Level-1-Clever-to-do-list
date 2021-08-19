import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../redux/actions'
import { Todo } from './ToDo'
import { Calendar } from '../Calendar/Calendar'
import { NewToDoForm } from './NewToDoForm'

export const ToDoList = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos.todos)
  const [isLoading, setIsLoading] = useState(true)
  const uid = useSelector((state) => state.userInfo.userInfo.uid)
  const date = useSelector((state) => state.date)

  useEffect(() => {
    dispatch(getTodos(uid))
  }, [])

  useEffect(() => {
    setIsLoading(false)
  }, [todos])

  if (isLoading) {
    return null
  } else {
    return (
      <>
        <Calendar />
        <h1>Tasks for {date.selectedDate.toDateString()}</h1>
        {todos.map((item) => {
          return new Date(item.date.seconds * 1000).getDate() ===
            date.selectedDate.getDate() &&
            new Date(item.date.seconds * 1000).getMonth() ===
              date.selectedDate.getMonth() ? (
            <Todo key={item.id} todo={item} />
          ) : null
        })}
        <NewToDoForm />
      </>
    )
  }
}
