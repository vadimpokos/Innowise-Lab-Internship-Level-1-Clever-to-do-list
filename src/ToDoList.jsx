import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from './redux/actions'

export const ToDoList = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos.todos)
  const [isLoading, setIsLoading] = useState(true)
  const uid = useSelector((state) => state.userInfo.userInfo.uid)

  useEffect(() => {
    dispatch(getTodos(uid))
  }, [])

  useEffect(() => {
    setIsLoading(false)
    console.log(todos)
  }, [todos])

  if (isLoading) {
    return null
  } else {
    return todos.map((item) => {
      return <div key={item.id}>{item.title}</div>
    })
  }
}
