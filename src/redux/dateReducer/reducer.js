import { CHANGE_DATE } from '../../constants/reduxTypes'

const initialState = {
  today: new Date(),
  selectedDate: new Date(),
}

export const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DATE:
      return { ...state, selectedDate: action.payload }
    default:
      return state
  }
}
