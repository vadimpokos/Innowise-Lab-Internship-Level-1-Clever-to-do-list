import './styles.css'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Input, Button } from 'antd'
import { updateToDo, deleteToDo } from '../../redux/todosReducer/actions'
import { changeFocus } from '../../redux/appReducer/actions'
import { openNotification } from '../../utils/notification'
import { Status } from '../ToDoStatus'

export const Todo = (todo) => {
  const [updateTitle, setUpdateTitle] = useState('')
  const [updateDesc, setUpdateDesc] = useState('')
  const dispatch = useDispatch()
  const focusedId = useSelector((state) => state.app.focusedId)

  const handleTitleInput = (e) => {
    setUpdateTitle(e.target.value)
  }

  const handleDescriptionInput = (e) => {
    setUpdateDesc(e.target.value)
  }

  const handleUpdateButton = () => {
    if (!updateTitle && !updateDesc) {
      openNotification({
        type: 'warning',
        message: 'Both fields are empty',
      })
    } else {
      dispatch(
        updateToDo(
          todo.todo,
          updateTitle ? updateTitle : todo.todo.title,
          updateDesc ? updateDesc : todo.todo.description,
          todo.todo.status
        )
      )
      dispatch(changeFocus(''))
      setUpdateTitle('')
      setUpdateDesc('')
    }
  }

  const handleHideButton = () => {
    dispatch(changeFocus(''))
  }

  const handleDeleteButton = () => {
    dispatch(deleteToDo(todo.todo.firestoreId, todo.todo.id))
  }

  const handleMoreButton = () => {
    dispatch(changeFocus(todo.todo.id))
  }

  return (
    <Card>
      <Status todo={todo.todo} />
      <Card.Meta title={todo.todo.title} description={todo.todo.description} />

      {focusedId === todo.todo.id ? (
        <>
          <Input onChange={handleTitleInput} value={updateTitle} />

          <Input onChange={handleDescriptionInput} value={updateDesc} />
          <Button onClick={handleUpdateButton}>Update</Button>
          <Button onClick={handleHideButton}>Hide</Button>
          <Button type='primary' danger onClick={handleDeleteButton}>
            Delete
          </Button>
        </>
      ) : (
        <Button onClick={handleMoreButton}>More</Button>
      )}
    </Card>
  )
}
