import { ADD_TODO, DELETE_TODO, GET_TODOS } from '../actions/types';

const initialState = {
  todos: [],
  todo: [],
  loading: true,
  error: {},
};

const todos = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TODOS:
      return { ...state, todos: payload, loading: false };
    case ADD_TODO:
      return {
        ...state,
        todos: [payload, ...state.todos],
        loading: false,
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload),
        loading: false,
      };
    default:
      return state;
  }
};

export default todos;
