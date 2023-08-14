import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "@/features/todoList/types";
import { AppDispatch, AppThunk } from "@/store";

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state.push(action.payload);
    },
    toggleTodo(state, action: PayloadAction<Todo>) {
      let todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { toggleTodo } = todoSlice.actions;

export const addTodo =
  (text: string): AppThunk =>
  async (dispatch: AppDispatch) => {
    const newTodo: Todo = {
      id: Math.random().toString(36),
      completed: false,
      text: text,
    };
    dispatch(todoSlice.actions.addTodo(newTodo));
  };