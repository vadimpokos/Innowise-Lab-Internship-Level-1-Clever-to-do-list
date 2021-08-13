import { db } from '../firebase/firebase'
import {
  ADD_TODO,
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
            todos = [...todos, { ...doc.data(), firestoreId: doc.id }]
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

export function addToDo(title, description, uid) {
  return async (dispatch) => {
    const response = db.collection('todos')
    const todo = {
      title: title,
      id: new Date().getTime(),
      description: description,
      uid: uid,
    }
    try {
      await response
        .add(todo)
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id)
        })
        .then(() => {
          dispatch({ type: ADD_TODO, payload: todo })
        })
        .catch((error) => {
          console.error('Error adding document: ', error)
        })
    } catch (e) {
      console.log(e)
    }
  }
}

export function updateToDo(todo, title, description) {
  return async (dispatch) => {
    const response = db.collection('todos')
    const newToDo = {
      title: title,
      description: description,
      id: todo.id,
      uid: todo.uid,
      firestoreId: todo.firestoreId,
    }
    try {
      await response
        .doc(todo.firestoreId)
        .update({
          title: title,
          description: description,
        })
        .then(() => {
          console.log('Document successfully updated!')
        })
        .then(() => {
          dispatch({ type: UPDATE_TODO, payload: newToDo })
        })
        .catch((error) => {
          console.error('Error updating document: ', error)
        })
    } catch (e) {
      console.log(e)
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
          console.log('Document successfully deleted!')
        })
        .then(() => {
          dispatch({ type: DELETE_TODO, payload: id })
        })
        .catch((error) => {
          console.error('Error removing document: ', error)
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

export function changeFocus(id) {
  return {
    type: FOCUS,
    payload: id,
  }
}
