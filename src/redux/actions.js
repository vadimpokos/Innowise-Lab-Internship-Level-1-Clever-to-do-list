import { db } from '../firebase/firebase'
import { GET_TODOS } from './reduxTypes'

export function getTodos() {
  return async (dispatch) => {
    const response = db.collection('todos')
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
