import './styles.css'
import React, { useState } from 'react'
import { Input, Button, Form } from 'antd'
import { addToDo, getTodos } from '../../../redux/todosReducer/actions'
import { useDispatch, useSelector } from 'react-redux'
import { openNotification } from '../../../utils/notification'

const NewToDoFormComponent = () => {
  const [newTitle, setNewTitle] = useState('')
  const [newDesc, setNewDesc] = useState('')
  const uid = useSelector((state) => state.userInfo.userInfo.uid)
  const date = useSelector((state) => state.date)
  const dispatch = useDispatch()

  const handleTitleInput = (e) => {
    setNewTitle(e.target.value)
  }
  const handleDescriptionInput = (e) => {
    setNewDesc(e.target.value)
  }

  const handleAddButton = () => {
    if (!newTitle || !newDesc) {
      openNotification('warning', 'Missing required field')
    } else {
      dispatch(addToDo(newTitle, newDesc, uid, date.selectedDate))
      dispatch(getTodos(uid))
      setNewTitle('')
      setNewDesc('')
    }
  }

  return (
    <div className='form-wrapper'>
      <div className='form-container'>
        <Form>
          <h1>Add To Do</h1>
          <Form.Item label='Title'>
            <Input onChange={handleTitleInput} value={newTitle} />
          </Form.Item>
          <Form.Item label='Description'>
            <Input.TextArea onChange={handleDescriptionInput} value={newDesc} />
          </Form.Item>
          <Button onClick={handleAddButton}>Add new</Button>
        </Form>
      </div>
    </div>
  )
}

export const NewToDoForm = React.memo(NewToDoFormComponent)
