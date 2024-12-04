import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type TTodo = {
  id: string;
  title:string;
  description:string;
  isCompleted?: boolean;
};
type TInitialstate = { 
  todos: TTodo[],
};

const initialState : TInitialstate = {
  todos:[],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo : (state,action : PayloadAction<TTodo>)=> {
        state.todos.push({...action.payload, isCompleted:false });
    },
    removeTodo : (state,action : PayloadAction<string>)=> {
        state.todos = state.todos.filter((item)=>item.id != action.payload)
    }
  },
})

// // Action creators are generated for each case reducer function
// export const { } = counterSlice.actions

export const {addTodo,removeTodo} = todoSlice.actions; 
export default todoSlice.reducer;