import { FOCUS, SET_ISLOADING } from '../../constants/reduxTypes'

export function changeFocus(id) {
  return {
    type: FOCUS,
    payload: id,
  }
}

export function showLoading() {
  return {
    type: SET_ISLOADING,
    payload: true,
  }
}

export function hideLoading() {
  return {
    type: SET_ISLOADING,
    payload: false,
  }
}
