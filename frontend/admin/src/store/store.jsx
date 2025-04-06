import { configureStore } from '@reduxjs/toolkit'
import dataSlice from '../store/dataSlice'

export const store = configureStore({
  reducer: {
    data : dataSlice,
  },
})