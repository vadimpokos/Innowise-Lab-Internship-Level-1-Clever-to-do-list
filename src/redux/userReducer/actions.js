import firebase from 'firebase'
import { openNotification } from '../../notification'
import { CONFIRM_ERROR, LOGIN, LOGOUT, SIGN_UP } from '../reduxTypes'

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
