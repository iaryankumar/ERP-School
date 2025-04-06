import React from 'react'
import Navbar from '../components/Navbar'
import Navigation from '../components/Navigation'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import axiosInstance from '../api/axiosInstance'

const Home = () => {
    const ctx = useSelector((state)=>state.data);
    const users = ctx.studentsData;
    const handleAbsent =async (id)=>{
        try {
           const res = await axiosInstance.put(`/teacher/absent/${id}`) 
           toast.success(res.data.message ,{position:'top-center'})
        } catch (error) {
            toast.error(error.response.data.message ,{position:'top-center'})
        }
    }
    const handlePresent = async(id)=>{
        try {
            const res = await axiosInstance.put(`/teacher/present/${id}`) 
            toast.success(res.data.message ,{position:'top-center'})
         } catch (error) {
             toast.error(error.response.data.message ,{position:'top-center'})
         }
    }
  return (
    <>
    <Navbar title={'Home'} />
    <Navigation page={"Home"}/>

    <div className='flex flex-col justify-center items-center px-1 pt-2 pb-24 gap-3'>
        {
           users.map((ele,i)=>{
                return <div key={i} className='h-max py-1 w-full border rounded border-borderSecondary p-2'>
                    <div className='ml-1'>
                    <h1 className='text-[18px] font-bold text-textSecondary'><span>{i+1}.</span> {ele.name}</h1>
                    <p className='text-[16px] text-textSecondary'>{ele.fatherName}</p>
                    </div>
                    <div className='h-[43px] w-full flex items-center py-1 gap-2'>
                        <button onClick={()=>handleAbsent(ele._id)} className=' h-full flex-1 rounded bg-red-400 text-white'>Absent</button>
                        <button onClick={()=>handlePresent(ele._id)} className=' h-full flex-1 rounded bg-green-600 text-white'>Present</button>
                    </div>
                </div>
            })
        }
            
    </div>
    </>
  )
}

export default Home
