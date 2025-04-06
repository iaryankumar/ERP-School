import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Auth from "./pages/Auth"
import Home from "./pages/Home"
import AddStudents from "./pages/AddStudents"
import AddTeacher from "./pages/AddTeacher"
import Assignment from "./pages/Assignment"
import Students from "./pages/Students"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { setupInterceptor } from "./api/axiosInstance"
import Loader from "./components/Loader"
import { ToastContainer } from "react-toastify"
import { allAssignments, myData, myStudents, myTeachers } from "./store/dataSlice"
import Teachers from "./pages/Teachers"


function App() {
const ctx = useSelector((state)=>state.data);
// console.log(ctx)
const loader = ctx.loader
const login = ctx.token
const dispatch = useDispatch();
useEffect(()=>{
  setupInterceptor(dispatch)
},[dispatch])
useEffect(()=>{
if(ctx.token){
  dispatch(myData())
  dispatch(myTeachers())
  dispatch(myStudents())
  dispatch(allAssignments())
}
},[ctx.token])

  return (
    <>
    <BrowserRouter>
    {loader&&  <Loader/>}
    <Routes>
      <Route path="/" element={login? <Home/> : <Navigate to={'/auth'}/>}/>
      <Route path="/auth" element={!login? <Auth/> : <Navigate to={'/'}/>}/>
      <Route path="/add-alumini" element={login? <AddStudents/> : <Navigate to={'/auth'}/>}/>
      <Route path="/add-teacher" element={login? <AddTeacher/> : <Navigate to={'/auth'}/>}/>
      <Route path="/assignments" element={login? <Assignment/> : <Navigate to={'/auth'}/>}/>
      <Route path="/students" element={login? <Students/> : <Navigate to={'/auth'}/>}/>
      <Route path="/teachers" element={login? <Teachers/> : <Navigate to={'/auth'}/>}/>
    </Routes>
    <ToastContainer/>
    </BrowserRouter>
    </>
  )
}

export default App
