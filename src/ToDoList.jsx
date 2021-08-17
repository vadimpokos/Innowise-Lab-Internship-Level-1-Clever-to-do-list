import { Input, Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToDo, getTodos } from './redux/actions'
import { Todo } from './ToDo'
import { Calendar } from './Calendar'

export const ToDoList = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos.todos)
  const [isLoading, setIsLoading] = useState(true)
  const uid = useSelector((state) => state.userInfo.userInfo.uid)
  const date = useSelector((state) => state.date)

  const [newTitle, setNewTitle] = useState('')
  const [newDesc, setNewDesc] = useState('')

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
        <Input onChange={(e) => setNewTitle(e.target.value)} value={newTitle} />
        <Input onChange={(e) => setNewDesc(e.target.value)} value={newDesc} />
        <Button
          onClick={() => {
            if (!newTitle || !newDesc) {
              console.log('missing required field')
            } else {
              dispatch(addToDo(newTitle, newDesc, uid, date.selectedDate))
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
}
