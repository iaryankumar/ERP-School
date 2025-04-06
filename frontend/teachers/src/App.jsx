import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import { ToastContainer } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { myStudents } from "./store/AuthSlice"
import { setupInterceptor } from "./api/axiosInstance"
import Loader from "./components/Loader"
import Assignment from "./pages/Assignment"


function App() {
  const dispatch = useDispatch()
  const ctx = useSelector((state)=>state.data)
  const token = ctx.token;
  const loader = ctx.loader
  useEffect(()=>{
    setupInterceptor(dispatch)
  },[dispatch])
  useEffect(()=>{
    if(ctx.token){
      dispatch(myStudents())
    }
  },[ctx.token])
  return (
    <>
      <BrowserRouter>
      {loader&&<Loader/>}
      <Routes>
        <Route path="/" element={token?<Home/>:<Navigate to={'/auth'}/>} />
        <Route path="/auth" element={!token?<Auth/>:<Navigate to={'/'}/>} />
        <Route path="/assignments" element={token?<Assignment/>:<Navigate to={'/'}/>} />
      </Routes>
      <ToastContainer/>
      </BrowserRouter>
    </>
  )
}

export default App
