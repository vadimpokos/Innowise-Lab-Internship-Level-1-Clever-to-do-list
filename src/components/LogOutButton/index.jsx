import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'antd'
import { logout } from '../../redux/userReducer/actions'
import { clearTodoList } from '../../redux/todosReducer/actions'

const LogOutButtonComponent = () => {
  const dispatch = useDispatch()
  return (
    <Button
      onClick={() => {
        dispatch(logout())
        dispatch(clearTodoList())
      }}
    >
      Log Out
    </Button>
  )
}

export const LogOutButton = React.memo(LogOutButtonComponent)
