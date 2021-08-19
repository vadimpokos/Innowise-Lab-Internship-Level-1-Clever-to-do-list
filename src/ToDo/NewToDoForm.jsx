import './NewToDo.css'
import React, { useState } from 'react'
import { Input, Button, Form } from 'antd'
import { addToDo, getTodos } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { openNotification } from '../notification'

export const NewToDoForm = () => {
  const [newTitle, setNewTitle] = useState('')
  const [newDesc, setNewDesc] = useState('')
  const uid = useSelector((state) => state.userInfo.userInfo.uid)
  const date = useSelector((state) => state.date)
  const dispatch = useDispatch()

  return (
    <div className='form-wrapper'>
      <div className='form-container'>
        <Form>
          <h1>Add To Do</h1>
          <Form.Item label='Title'>
            <Input
              onChange={(e) => setNewTitle(e.target.value)}
              value={newTitle}
            />
          </Form.Item>
          <Form.Item label='Description'>
            <Input.TextArea
              onChange={(e) => setNewDesc(e.target.value)}
              value={newDesc}
            />
          </Form.Item>
          <Button
            onClick={() => {
              if (!newTitle || !newDesc) {
                openNotification('warning', 'Missing required field')
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
        </Form>
      </div>
    </div>
  )
}
