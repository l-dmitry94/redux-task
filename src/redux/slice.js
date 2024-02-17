import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodos: (state, { payload }) => {
      state.todos = [...state.todos, payload];
    },
    deleteTodos: (state, { payload }) => {
      state.todos = state.todos.filter(todo => todo.id !== payload);
    },
  },
});

export const { addTodos, deleteTodos } = todosSlice.actions;
export default todosSlice.reducer;
export const selectorTodos = state => state.todos;
