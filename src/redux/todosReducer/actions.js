import { db } from '../../firebase/firebase'
import {
  ADD_TODO,
  CLEAR_TODOS,
  DELETE_TODO,
  GET_TODOS,
  UPDATE_TODO,
} from '../../constants/reduxTypes'
import { openNotification } from '../../utils/notification'
import { hideLoading, showLoading } from '../appReducer/actions'

export function getTodos(uid) {
  return async (dispatch) => {
    dispatch(showLoading())
    const response = db.collection('todos').where('uid', '==', uid)
    let todos = []
    try {
      const query = await response.get()

      query.forEach((doc) => {
        todos = [...todos, { ...doc.data(), firestoreId: doc.id }]
      })
      dispatch({ type: GET_TODOS, payload: todos })
      dispatch(hideLoading())
    } catch (e) {
      openNotification('error', 'Error loading data', e.message)
    }
  }
}

export function addToDo(title, description, uid, day) {
  return async (dispatch) => {
    const response = db.collection('todos')
    const todo = {
      title: title,
      id: new Date().getTime(),
      description: description,
      uid: uid,
      status: 'inprogress',
      date: day,
    }
    try {
      await response.add(todo)
      dispatch({ type: ADD_TODO, payload: todo })
    } catch (e) {
      openNotification({
        type: 'error',
        message: 'Error adding document',
        description: e.message,
      })
    }
  }
}

export function updateToDo(todo, title, description, status) {
  return async (dispatch) => {
    const response = db.collection('todos')
    const newToDo = {
      title: title,
      description: description,
      id: todo.id,
      uid: todo.uid,
      firestoreId: todo.firestoreId,
      status: status,
      date: todo.date,
    }
    try {
      await response.doc(todo.firestoreId).update({
        title: title,
        description: description,
        status: status,
      })
      dispatch({ type: UPDATE_TODO, payload: newToDo })
    } catch (e) {
      openNotification({
        type: 'error',
        message: 'Error updating document',
        description: e.message,
      })
    }
  }
}

export function deleteToDo(docId, id) {
  return async (dispatch) => {
    const response = db.collection('todos')
    try {
      await response.doc(docId).delete()
      openNotification({ type: 'success', message: 'Task deleted' })
      dispatch({ type: DELETE_TODO, payload: id })
    } catch (e) {
      console.log(e)
      openNotification({
        type: 'error',
        message: 'Error deleting task',
        description: e.message,
      })
    }
  }
}

export function clearTodoList() {
  return {
    type: CLEAR_TODOS,
    payload: [],
  }
}
