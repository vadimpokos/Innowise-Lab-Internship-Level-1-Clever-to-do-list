import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'antd'
import { logout, clearTodoList } from './redux/actions'

export const LogOutButton = () => {
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
