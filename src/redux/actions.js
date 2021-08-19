import { db } from '../firebase/firebase'
import {
  ADD_TODO,
  CHANGE_DATE,
  CLEAR_TODOS,
  CONFIRM_ERROR,
  DELETE_TODO,
  FOCUS,
  GET_TODOS,
  LOGIN,
  LOGOUT,
  SIGN_UP,
  UPDATE_TODO,
} from './reduxTypes'
import firebase from 'firebase'
import { openNotification } from '../notification'

export function getTodos(uid) {
  return async (dispatch) => {
    const response = db.collection('todos').where('uid', '==', uid)
    let todos = []
    try {
      await response
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            todos = [...todos, { ...doc.data(), firestoreId: doc.id }]
          })
        })
        .then(() => {
          dispatch({ type: GET_TODOS, payload: todos })
        })
        .catch((e) => {
          throw e
        })
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
      await response
        .add(todo)
        .then(() => {
          dispatch({ type: ADD_TODO, payload: todo })
        })
        .catch((error) => {
          throw error
        })
    } catch (e) {
      openNotification('error', 'Error adding document', e.message)
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
      await response
        .doc(todo.firestoreId)
        .update({
          title: title,
          description: description,
          status: status,
        })
        .then(() => {
          dispatch({ type: UPDATE_TODO, payload: newToDo })
        })
        .catch((error) => {
          throw error
        })
    } catch (e) {
      openNotification('error', 'Error updating document', e.message)
    }
  }
}

export function deleteToDo(docId, id) {
  return async (dispatch) => {
    const response = db.collection('todos')
    try {
      await response
        .doc(docId)
        .delete()
        .then(() => {
          openNotification('success', 'Task deleted!')
        })
        .then(() => {
          dispatch({ type: DELETE_TODO, payload: id })
        })
        .catch((error) => {
          throw error
        })
    } catch (e) {
      console.log(e)
      openNotification('error', 'Error removing task!', e.message)
    }
  }
}

export function loginEmail(email, password) {
  return async (dispatch) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user
        dispatch({ type: LOGIN, payload: user })
      })
      .catch((error) => {
        openNotification('error', 'Login error', error.message)
      })
  }
}

export function logout() {
  return async (dispatch) => {
    try {
      await firebase
        .auth()
        .signOut()
        .then(() => {
          dispatch({ type: LOGOUT, payload: {} })
        })
        .catch((error) => {
          throw error
        })
    } catch (e) {
      openNotification('error', 'LogOut error', e.message)
    }
  }
}

export function clearTodoList() {
  return {
    type: CLEAR_TODOS,
    payload: [],
  }
}

export function createUserWithEmail(email, password, confirm) {
  if (password === confirm) {
    return async (dispatch) => {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user
          dispatch({ type: SIGN_UP, payload: user })
        })
        .catch((error) => {
          openNotification('error', 'Sign Up error!', error.message)
        })
    }
  } else {
    openNotification(
      'error',
      'Passwords didn`t match!',
      'Please, check that passwords in password and confirm fields are similar'
    )
    return {
      type: CONFIRM_ERROR,
    }
  }
}

export function changeFocus(id) {
  return {
    type: FOCUS,
    payload: id,
  }
}

export function changeDate(newDate) {
  return {
    type: CHANGE_DATE,
    payload: newDate,
  }
}
