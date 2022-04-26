import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { reducer } from "./reducer";

export const rootReducer = combineReducers({
  todoList: reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
