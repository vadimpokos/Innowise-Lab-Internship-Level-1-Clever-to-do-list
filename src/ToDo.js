import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Input, Button } from 'antd'
import { updateToDo, deleteToDo, changeFocus } from './redux/actions'

export const Todo = (todo) => {
  const [updateTitle, setUpdateTitle] = useState('')
  const [updateDesc, setUpdateDesc] = useState('')
  //   const [isMore, setIsMore] = useState(false)
  const dispatch = useDispatch()
  const focusedId = useSelector((state) => state.app)

  useEffect(() => console.log(focusedId), [])

  return (
    <Card>
      <Card.Meta title={todo.todo.title} description={todo.todo.description} />

      {focusedId === todo.todo.id ? (
        <>
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
              dispatch(changeFocus(''))
              setUpdateTitle('')
              setUpdateDesc('')
            }}
          >
            Update
          </Button>
          <Button onClick={() => dispatch(changeFocus(''))}>Hide</Button>
          <Button
            type='primary'
            danger
            onClick={() => {
              dispatch(deleteToDo(todo.todo.firestoreId, todo.todo.id))
            }}
          >
            Delete
          </Button>
        </>
      ) : (
        <Button onClick={() => dispatch(changeFocus(todo.todo.id))}>
          More
        </Button>
      )}
    </Card>
  )
}
