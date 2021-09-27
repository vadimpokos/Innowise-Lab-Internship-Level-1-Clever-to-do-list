import { CHANGE_DATE } from '../../constants/reduxTypes'

export function changeDate(newDate) {
  return {
    type: CHANGE_DATE,
    payload: newDate,
  }
}
