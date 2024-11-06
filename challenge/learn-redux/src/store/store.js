// step 1
import { createStore } from 'redux';

// step 2
const initialState = {
  counter: 0
}

// step 3 - bikin reducer
const doCounter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 }
    case "DECREMENT":
      return { counter: state.counter - 1 }
    case "INCREMENT_BY_10":
      return { counter: state.counter + 10 }
    default:
      return state
  }
}

// step 4 - bikin store
let store = createStore(doCounter)

// // step 5 - subscribe
// store.subscribe(() => { console.log(store.getState()) })

// // step 6 - implementasi
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'DECREMENT' })
// store.dispatch({ type: 'DECREMENT' })
// store.dispatch({ type: 'INCREMENT_BY_5' })
// store.dispatch({ type: 'FUFUFAFA' })

export default store