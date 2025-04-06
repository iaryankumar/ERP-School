import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Navigation from '../components/Navigation'
import axiosInstance from '../api/axiosInstance';
import { toast } from 'react-toastify';

const Assignment = () => {
    const [details, setDetails] = useState({
        title: "",
        content: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosInstance.post('/teacher/addAssignment', details)
            if (res.status == 200) {
                toast.success(res.data.message, { position: 'top-center' })
                console.log(res)
                setDetails({title: "",
                    content: ""})
            }

        } catch (error) {
            toast.error(error.response.data.message, { position: 'top-center' })
        }
    }

    return (
        <>
            <Navbar title={'Assignments'} />
            <Navigation page={"Assignments"} />

            <form onSubmit={handleSubmit} className='h-max w-full px-4 py-5'>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="title" className='text-[17px] font-semibold tracking-wide text-textSecondary ml-1'>Assignment</label>
                    <input name='title' required onChange={(e) => setDetails({ ...details, [e.target.name]: e.target.value })} type="text" id="title" placeholder='Your Title...' className='border border-borderSecondary text-[17px] px-2 py-2 rounded outline-[#3a3939]' />
                </div>
                <div className='flex flex-col gap-1.5 mt-3'>
                    <textarea name='content' required onChange={(e) => setDetails({ ...details, [e.target.name]: e.target.value })} rows={8} placeholder='Your Title...' className='border border-borderSecondary text-[17px] px-2 py-2 rounded outline-[#3a3939] ' ></textarea>
                </div>
                <button className='py-2 mt-5 text-white w-full bg-blue-600 rounded'>Submit</button>
            </form>

        </>
    )
}

export default Assignment
