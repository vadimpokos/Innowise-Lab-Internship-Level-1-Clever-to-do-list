import { Input, Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToDo, getTodos } from './redux/actions'
import { Todo } from './ToDo'

export const ToDoList = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos.todos)
  const [isLoading, setIsLoading] = useState(true)
  const uid = useSelector((state) => state.userInfo.userInfo.uid)

  const [newTitle, setNewTitle] = useState('')
  const [newDesc, setNewDesc] = useState('')

  useEffect(() => {
    dispatch(getTodos(uid))
  }, [])

  useEffect(() => {
    setIsLoading(false)
    console.log(todos)
  }, [todos])

  if (isLoading) {
    return null
  }
  return (
    <>
      {todos.map((item) => (
        <Todo key={item.id} todo={item} />
      ))}

      <Input onChange={(e) => setNewTitle(e.target.value)} value={newTitle} />
      <Input onChange={(e) => setNewDesc(e.target.value)} value={newDesc} />
      <Button
        onClick={() => {
          if (!newTitle || !newDesc) {
            console.log('missing required field')
          } else {
            dispatch(addToDo(newTitle, newDesc, uid))
            dispatch(getTodos(uid))
            setNewTitle('')
            setNewDesc('')
          }
        }}
      >
        Add new
      </Button>
    </>
  )
}
