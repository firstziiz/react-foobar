// todos.js

// Actions
const ADD   = 'react-foobar/todo/ADD';
const TOGGLE_DONE   = 'react-foobar/todo/TOGGLE_DONE';

// InitialState
let InitialState = {
  todos: []
}

// Reducer
export default function reducer(state = InitialState, action) {
  switch (action.type) {
    case ADD:
      return {
        todos: [
          ...state.todos,
          { text: action.payload, done: false }
        ]
      }
    case TOGGLE_DONE:
      let newTodos = state.todos
      const index = action.payload
      newTodos[index].done = !newTodos[index].done
      return {
        todos: [...newTodos]
      }

    default:
      return state;
  }
}

// Action Creators
export const addTodo = todo => dispatch => dispatch({
  type: ADD , payload: todo 
})

export const toggleDone = index => dispatch => dispatch({
  type: TOGGLE_DONE , payload: index
})