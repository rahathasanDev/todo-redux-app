import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'



const initialState = {
  todos:[],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
})

// // Action creators are generated for each case reducer function
// export const { } = counterSlice.actions

export default todoSlice.reducer;