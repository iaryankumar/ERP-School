import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../api/axiosInstance'

export const myData = createAsyncThunk(
  'users/myData',
  async () => {
    try {
      const response = await axiosInstance.get('/admin/myData')
      return response.data
    } catch (error) {
      return error.response
    }
  },
);

export const myTeachers = createAsyncThunk(
  'users/myTeachers',
  async () => {
    try {
      const response = await axiosInstance.get('/admin/fetchTeachers')
      return response.data
    } catch (error) {
      return error.response?.data || { message: 'An error occurred' };
    }
  },
);
export const allAssignments = createAsyncThunk(
  'users/allAssignments',
  async () => {
    try {
      const response = await axiosInstance.get('/admin/fetchAllAssignments')
      return response.data
    } catch (error) {
      return error.response?.data || { message: 'An error occurred' };
    }
  },
);
export const myStudents = createAsyncThunk(
  'users/myStudents',
  async () => {
    try {
      const response = await axiosInstance.get('/admin/fetchStudents')
      return response.data
    } catch (error) {
      return error.response?.data || { message: 'An error occurred' };
    }
  },
);

const initialState = {
  token: JSON.parse(localStorage.getItem('ERP')) || '' ,
  loader:false,
  userData:{},
  studentsData:[],
  teachersData:[],
  assignmentData:[],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    loader:(state,action)=>{
        state.loader=action.payload
    },
    loggedIn:(state,action)=>{
      state.token=action.payload
      localStorage.setItem('ERP',JSON.stringify({token:action.payload}))
    }
  },
  extraReducers: (builder) => {
    builder.addCase(myData.fulfilled, (state, action) => {
      state.userData = action.payload
    }),
    builder.addCase(myTeachers.fulfilled, (state, action) => {
      state.teachersData = action.payload
    }),
    builder.addCase(myStudents.fulfilled, (state, action) => {
      state.studentsData = action.payload
    }),
    builder.addCase(allAssignments.fulfilled, (state, action) => {
      state.assignmentData = action.payload
    })
  },
})


export const {loader,loggedIn } = counterSlice.actions

export default counterSlice.reducer