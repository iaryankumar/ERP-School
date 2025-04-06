import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Assignments from "./pages/Assignments"
import Auth from "./pages/Auth"
import Loader from "./components/Loader"
import { ToastContainer } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { setupInterceptor } from "./api/axiosInstance"
import { assignmentData, myData } from "./store/DataSlice"


function App() {
  const dispatch = useDispatch()
  const ctx = useSelector((state)=>state.data);
  const token = ctx.token;
  useEffect(()=>{
    setupInterceptor(dispatch)
  },[dispatch])

  useEffect(()=>{
    if(token){
      dispatch(myData())
      dispatch(assignmentData())
    }
  },[ctx.token])

  return (
    <>
    <BrowserRouter>
    {ctx.loader&& <Loader/>}
    <Routes>
      <Route path="/" element={token?<Home/>:<Navigate to={'/auth'}/>}/>
      <Route path="/assignment" element={token?<Assignments/>:<Navigate to={'/auth'}/>}/>
      <Route path="/auth" element={!token?<Auth/>:<Navigate to={'/'}/>}/>
    </Routes>
    <ToastContainer/>
    </BrowserRouter>
    </>
  )
}

export default App
