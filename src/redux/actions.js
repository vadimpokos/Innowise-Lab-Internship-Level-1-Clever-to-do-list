import { db } from '../firebase/firebase'
import {
  CLEAR_TODOS,
  CONFIRM_ERROR,
  GET_TODOS,
  LOGIN,
  LOGOUT,
  SIGN_UP,
} from './reduxTypes'
import firebase from 'firebase'

export function getTodos(uid) {
  return async (dispatch) => {
    const response = db.collection('todos').where('uid', '==', uid)
    let todos = []
    try {
      await response
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`)
            todos = [...todos, doc.data()]
          })
        })
        .then(() => {
          console.log(todos)
          dispatch({ type: GET_TODOS, payload: todos })
        })
    } catch (e) {
      console.log(e)
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
        console.log(user)
        dispatch({ type: LOGIN, payload: user })
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log('error code--->', errorCode, 'error msg--->', errorMessage)
      })
  }
}

export function logout() {
  return async (dispatch) => {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: LOGOUT, payload: {} })
      })
      .catch((error) => {
        console.log(error)
      })
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
          const errorCode = error.code
          const errorMessage = error.message
          console.log(
            'error code--->',
            errorCode,
            'error msg--->',
            errorMessage
          )
        })
    }
  } else {
    console.log(new Error('confirm error'))
    return {
      type: CONFIRM_ERROR,
    }
  }
}
