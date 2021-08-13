import { Card, Input, Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToDo, deleteToDo, getTodos, updateToDo } from './redux/actions'

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
  } else {
    return (
      <>
        {todos.map((item) => {
          return (
            <div key={item.id}>
              <Todo todo={item} />
            </div>
          )
        })}
        <Input onChange={(e) => setNewTitle(e.target.value)} value={newTitle} />
        <Input onChange={(e) => setNewDesc(e.target.value)} value={newDesc} />
        <Button
          onClick={() => {
            dispatch(addToDo(newTitle, newDesc, uid))
            dispatch(getTodos(uid))
            setNewTitle('')
            setNewDesc('')
          }}
        >
          Add new
        </Button>
      </>
    )
  }
}

const Todo = (todo) => {
  const [updateTitle, setUpdateTitle] = useState('')
  const [updateDesc, setUpdateDesc] = useState('')
  const dispatch = useDispatch()
  const uid = useSelector((state) => state.userInfo.userInfo.uid)

  useEffect(() => console.log(uid), [])

  return (
    <Card>
      <Card.Meta title={todo.todo.title} description={todo.todo.description} />
      <Input
        onChange={(e) => setUpdateTitle(e.target.value)}
        value={updateTitle}
      />
      <Input
        onChange={(e) => setUpdateDesc(e.target.value)}
        value={updateDesc}
      />
      <Button
        onClick={() => {
          dispatch(updateToDo(todo.todo, updateTitle, updateDesc))
          // dispatch(getTodos(uid))
          setUpdateTitle('')
          setUpdateDesc('')
        }}
      >
        Update
      </Button>
      <Button
        type='primary'
        danger
        onClick={() => {
          dispatch(deleteToDo(todo.todo.firestoreId, todo.todo.id))
        }}
      >
        Delete
      </Button>
    </Card>
  )
}
