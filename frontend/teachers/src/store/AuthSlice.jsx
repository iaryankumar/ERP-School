import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../api/axiosInstance';

export const myStudents = createAsyncThunk(
  'users/myStudents',
  async () => {
    try {
      const response = await axiosInstance.get('/teacher/myStudents')
      return response.data
    } catch (error) {
      return error.response?.data || { message: 'An error occurred' };
    }
  },
);

const initialState = {
  token : JSON.parse(localStorage.getItem('teacher')) || '',
  studentsData: [],
  loader:false
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    loggedIn:(state,action)=>{
      state.token = action.payload;
      localStorage.setItem('teacher',JSON.stringify({token:action.payload}))
    },
    loader:(state,action)=>{
      state.loader=action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(myStudents.fulfilled, (state, action) => {
      state.studentsData = action.payload
    })
  }
  
})

// Action creators are generated for each case reducer function
export const {loggedIn,loader } = counterSlice.actions

export default counterSlice.reducer