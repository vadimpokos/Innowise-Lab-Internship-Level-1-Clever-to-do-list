import './ToDo.css'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Input, Button, Badge } from 'antd'
import { updateToDo, deleteToDo, changeFocus } from '../redux/actions'
import { CheckOutlined } from '@ant-design/icons'
import { openNotification } from '../notification'

export const Todo = (todo) => {
  const [updateTitle, setUpdateTitle] = useState('')
  const [updateDesc, setUpdateDesc] = useState('')
  const dispatch = useDispatch()
  const focusedId = useSelector((state) => state.app)

  const status = (status) => {
    if (status === 'inprogress') {
      return (
        <div className='todo_status'>
          <Button
            className='button_done'
            type='default'
            shape='round'
            icon={<CheckOutlined />}
            onClick={() =>
              dispatch(
                updateToDo(
                  todo.todo,
                  todo.todo.title,
                  todo.todo.description,
                  'done'
                )
              )
            }
          >
            Complete
          </Button>
          <Badge status='default' text='Active' />
        </div>
      )
    } else if (status === 'done') {
      return (
        <div className='todo_status'>
          <Badge status='success' text='Completed' />
        </div>
      )
    } else {
      return null
    }
  }

  return (
    <Card>
      {status(todo.todo.status)}
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
              if (!updateTitle && !updateDesc) {
                openNotification('warning', 'Both fields is empty')
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
