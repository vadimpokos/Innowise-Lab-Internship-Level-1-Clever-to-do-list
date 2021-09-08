import { CHANGE_DATE } from '../reduxTypes'

export function changeDate(newDate) {
  return {
    type: CHANGE_DATE,
    payload: newDate,
  }
}
