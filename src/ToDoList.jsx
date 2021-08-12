import { Card, Input, Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToDo, deleteToDo, getTodos } from './redux/actions'

export const ToDoList = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos.todos)
  const [isLoading, setIsLoading] = useState(true)
  const uid = useSelector((state) => state.userInfo.userInfo.uid)

  const [newTitle, setNewTitle] = useState()
  const [newDesc, setNewDesc] = useState()

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
              <Card>
                <Card.Meta title={item.title} description={item.description} />
                <Input />
                <Input />
                <Button>Update</Button>
                <Button
                  type='primary'
                  danger
                  onClick={() => {
                    dispatch(deleteToDo(item.firestoreId))
                    dispatch(getTodos(uid))
                  }}
                >
                  Delete
                </Button>
              </Card>
            </div>
          )
        })}
        <Input onChange={(e) => setNewTitle(e.target.value)} />
        <Input onChange={(e) => setNewDesc(e.target.value)} />
        <Button
          onClick={() => {
            dispatch(addToDo(newTitle, newDesc, uid))
          }}
        >
          Add new
        </Button>
      </>
    )
  }
}
