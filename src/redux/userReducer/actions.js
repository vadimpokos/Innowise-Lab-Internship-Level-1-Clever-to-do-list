import firebase from 'firebase'
import { openNotification } from '../../utils/notification'
import {
  CONFIRM_ERROR,
  LOGIN,
  LOGOUT,
  SIGN_UP,
} from '../../constants/reduxTypes'

export function loginEmail(email, password) {
  return async (dispatch) => {
    try {
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
      const user = userCredential.user
      dispatch({ type: LOGIN, payload: user })
    } catch (e) {
      openNotification({
        type: 'error',
        message: 'Error login!',
        description: e.message,
      })
    }
  }
}

export function logout() {
  return async (dispatch) => {
    try {
      await firebase.auth().signOut()
      dispatch({ type: LOGOUT, payload: {} })
    } catch (e) {
      openNotification({
        type: 'error',
        message: 'Error logout!',
        description: e.message,
      })
    }
  }
}

export function createUserWithEmail(email, password, confirm) {
  if (password === confirm) {
    return async (dispatch) => {
      try {
        const userCredential = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
        const user = userCredential.user
        dispatch({ type: SIGN_UP, payload: user })
      } catch (e) {
        openNotification({
          type: 'error',
          message: 'Sign Up Error!',
          description: e.message,
        })
      }
    }
  } else {
    openNotification({
      type: 'error',
      message: 'Passwords didn`t match!',
      description:
        'Please, check that passwords in password and confirm fields are similar',
    })
    return {
      type: CONFIRM_ERROR,
    }
  }
}
