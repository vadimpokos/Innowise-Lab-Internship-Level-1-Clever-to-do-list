import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from './redux/todosReducer/actions'
import { Calendar } from './Calendar/CalendarComponent/Calendar'
import { Loader } from './ToDo/Loader'
import { NewToDoForm } from './ToDo/NewToDo/NewToDoForm'
import { ToDoList } from './ToDo/ToDoList'

const Main = () => {
  const dispatch = useDispatch()
  const uid = useSelector((state) => state.userInfo.userInfo.uid)
  const date = useSelector((state) => state.date)
  const isLoading = useSelector((state) => state.app.isLoading)

  useEffect(() => {
    dispatch(getTodos(uid))
  }, [])

  return (
    <>
      <Calendar />
      <h1>Tasks for {date.selectedDate.toDateString()}</h1>
      {isLoading ? <Loader /> : <ToDoList />}
      <NewToDoForm />
    </>
  )
}

export const MainPage = React.memo(Main)
