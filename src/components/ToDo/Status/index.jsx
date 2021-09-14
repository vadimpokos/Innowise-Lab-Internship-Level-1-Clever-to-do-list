import React from 'react'
import { CheckOutlined } from '@ant-design/icons'
import { Badge, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { updateToDo } from '../../../redux/todosReducer/actions'

export const StatusComponent = (todo) => {
  const dispatch = useDispatch()

  const handleCompleteButton = () => {
    dispatch(
      updateToDo(todo.todo, todo.todo.title, todo.todo.description, 'done')
    )
  }

  if (todo.todo.status === 'inprogress') {
    return (
      <div className='todo_status'>
        <Button
          className='button_done'
          type='default'
          shape='round'
          icon={<CheckOutlined />}
          onClick={handleCompleteButton}
        >
          Complete
        </Button>
        <Badge status='default' text='Active' />
      </div>
    )
  } else if (todo.todo.status === 'done') {
    return (
      <div className='todo_status'>
        <Badge status='success' text='Completed' />
      </div>
    )
  } else {
    return null
  }
}

export const Status = React.memo(StatusComponent)
