import { createStore } from 'redux'

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      const incrementBy =
        typeof action.incrementBy === 'number' ? action.incrementBy : 1
      return {
        count: state.count + incrementBy
      }

    case 'DECREMENT_COUNT':
      const decrementBy =
        typeof action.decrementBy === 'number' ? action.decrementBy : 1
      return {
        count: state.count - decrementBy
      }

    case 'SET':
      return {
        count: action.count
      }

    case 'RESET_COUNT':
      return {
        count: 0
      }

    default:
      return state
  }
})

console.log(store.getState())

store.dispatch({
  type: 'INCREMENT_COUNT',
  incrementBy: 5
})

console.log(store.getState())

store.dispatch({
  type: 'DECREMENT_COUNT',
  decrementBy: 10
})

store.dispatch({
  type: 'DECREMENT_COUNT'
})

console.log(store.getState())

store.dispatch({
  type: 'RESET_COUNT'
})

console.log(store.getState())

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({
  type: 'DECREMENT_COUNT'
})

store.dispatch({
  type: 'DECREMENT_COUNT'
})

store.dispatch({
  type: 'DECREMENT_COUNT'
})

store.dispatch({
  type: 'DECREMENT_COUNT'
})

store.dispatch({
  type: 'SET',
  count: 134
})
