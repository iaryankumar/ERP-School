import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../api/axiosInstance';


export const myData = createAsyncThunk(
  'users/myData',
  async () => {
    try {
      const response = await axiosInstance.get('/alumini/myData')
      return response.data
    } catch (error) {
      return error.response?.data || { message: 'An error occurred' };
    }
  },
)

export const assignmentData = createAsyncThunk(
  'users/assignmentData',
  async () => {
    try {
      const response = await axiosInstance.get('/alumini/assignments')
      return response.data
    } catch (error) {
      return error.response?.data || { message: 'An error occurred' };
    }
  },
)

const initialState = {
  token:JSON.parse(localStorage.getItem('students')) || '',
  loader:false,
  myData:'',
  assignmentData:[],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    loggedIn:(state,action)=>{
      state.token=action.payload
      localStorage.setItem('students',JSON.stringify({token:action.payload}))
    },
    loader:(state,action)=>{
      state.loader=action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(myData.fulfilled, (state, action) => {
      state.myData=action.payload;
    })
    builder.addCase(assignmentData.fulfilled, (state, action) => {
      if(action.payload.message==='Unauthorized'){
        localStorage.removeItem('students')
      }else{
        state.assignmentData=action.payload;
      }
    })
  },
})

// Action creators are generated for each case reducer function
export const { loggedIn ,loader} = counterSlice.actions

export default counterSlice.reducer