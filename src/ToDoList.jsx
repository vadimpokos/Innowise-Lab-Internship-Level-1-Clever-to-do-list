import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from './redux/actions'

export const ToDoList = () => {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos.todos)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    dispatch(getTodos())
  }, [])

  useEffect(() => {
    setIsLoading(false)
    console.log(todos)
  }, [todos])


  
  return (
    isLoading ? null : todos.map((item, index) => {
      return <div key={index}>{item.title}</div>
    })
  )
}
