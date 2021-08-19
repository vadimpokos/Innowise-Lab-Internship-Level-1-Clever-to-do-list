import React from 'react'
import { Route } from 'react-router'
import { useRouteMatch } from 'react-router'
import { ToDoList } from '../ToDo/ToDoList'
import { LogOutButton } from '../Auth/LogOutButton'

export const AppRouter = () => {
  const { path } = useRouteMatch()
  return (
    <>
      <LogOutButton />
      <Route exact path={path} component={ToDoList} />
    </>
  )
}
