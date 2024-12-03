import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type TTodo = {
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
  },
})

// // Action creators are generated for each case reducer function
// export const { } = counterSlice.actions

export const {addTodo} = todoSlice.actions; 
export default todoSlice.reducer;