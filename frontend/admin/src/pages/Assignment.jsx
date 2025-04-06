import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Navigations from '../components/Navigations'
import { MdDelete } from 'react-icons/md'
import My from '../components/My'
import { useSelector } from 'react-redux'
import axiosInstance from '../api/axiosInstance'
import { toast } from 'react-toastify'

const Assignment = () => {
    const [profileVisible,setProfile]=useState(false)
    const ctx = useSelector((state)=>state.data);
    const assignments = ctx.assignmentData;
    const deleteAssignment = async(id)=>{
      try {
        const res = await axiosInstance.delete(`/admin/deleteAssignment/${id}`)
        if(res.status==200){
          console.log(res)
            toast.success(res.data.message ,{position:'top-center'})
        }
    } catch (error) {
      toast.error(error.response.data.message,{position:'top-center'})
    }
    }
  return (
    <>
    <My showprofile={profileVisible} setProfile={setProfile} />
    <Navbar title={"Assignments"}/>
    <Navigations page={"Assignment"} showprofile={profileVisible} setProfile={setProfile} />

    <div className='w-full h-max py-3 grid grid-cols-4 px-6 pt-10 gap-12 pb-28'> 

        {/*  cards */}
        {
            assignments.map((ele,i)=>{
                return <div key={i}  className='h-max w-full border border-borderSecondary shadow-2xs rounded py-1 ps-4 pe-4 cursor-pointer hover:border-1 hover:border-red-300 pb-2'>
                <h1 className='text-[18px] font-semibold text-textSecondary mt-2'>{ele.title}</h1>
                <p className='mt-3 text-[14.5px] text-textSecondary'>{ele.content}</p>
                <div className='flex w-full items-center justify-between text-[13px] mt-2 text-gray-400 font-light'>
                      <h1>#{ele.by} @{ele.grade}</h1>
                      <MdDelete onClick={()=>deleteAssignment(ele._id)} className='text-xl text-red-500 hover:text-red-900' />
                </div>
              </div>
            })
        }
        {/*  cards */}

    </div>

    </>
  )
}

export default Assignment
