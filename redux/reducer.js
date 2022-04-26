import { createSlice } from "@reduxjs/toolkit";

// console.log(initialState);
export const toDoList = createSlice({
  name: "todolist",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.unshift(action.payload);
    },
    deleteTodo: (state, action) => {
      const todos = state.filter((todo) => todo.item !== action.payload.item);
      return todos;
    },
  },
});
export const {
  actions: { addTodo, deleteTodo },
  reducer,
} = toDoList;
