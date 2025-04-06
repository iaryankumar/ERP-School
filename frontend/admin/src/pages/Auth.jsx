import React, { useState } from 'react'
import { IoArrowForward } from 'react-icons/io5'
import { PiEyeLight, PiPasswordLight } from 'react-icons/pi'
import { TfiEmail } from 'react-icons/tfi'
import axiosInstance from '../api/axiosInstance'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { loggedIn } from '../store/dataSlice'

const Auth = () => {
    const dispatch = useDispatch()
    const [showPassword, setShowPassword] = useState(false)
    const [details, setDetails] = useState({ uid: "", password: '' })
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosInstance.post('/admin/login',details)
            if(res.status==200){
                toast.success(res.data.message ,{position:'top-center'})
                dispatch(loggedIn(res.data.token))
            }
        } catch (error) {
            toast.error(error.response.data.message ,{position:'top-center'})
        }
    }
    return (
        <>
            <div className='h-screen w-full flex items-center justify-center'>

                <div className='h-max md:w-[35%] w-[95%] px-6 py-9 shadow rounded-xl border border-borderPrimary'>
                    <h1 className='font-primary text-3xl font-bold text-blue-600'>Login</h1>
                    <p className='font-primary mt-4 text-[14px] text-gray-700'> Welcome to Admin Panel ! Please fill your details below to Login.</p>

                    <form onSubmit={handleSubmit} className='h-max w-full pt-8 text-gray-600 flex flex-col gap-3.5'>
                        <div className='h-[43px] border border-borderSecondary rounded-full flex items-center px-4 gap-3'>
                            <TfiEmail />
                            <input name='uid' onChange={(e) => setDetails({ ...details, [e.target.name]: e.target.value })} type="text" placeholder='Enter uid' className='text-[14px] font-normal font-primary flex-1  outline-none' required />
                        </div>
                        <div className='h-[43px] border border-borderSecondary rounded-full flex items-center px-4 gap-3 relative'>
                            <PiPasswordLight />
                            <input name='password' onChange={(e) => setDetails({ ...details, [e.target.name]: e.target.value })} type={`${showPassword ? 'text' : 'password'}`} placeholder='Enter Password' className='text-[14px] font-normal font-primary flex-1  outline-none' required />
                            <PiEyeLight onClick={() => setShowPassword(!showPassword)} className='absolute right-5 text-xl cursor-pointer' />
                        </div>
                        <button className='bg-blue-700 hover:bg-blue-500 text-white font-semibold h-[45px] mt-4 rounded-full flex items-center justify-center gap-3 cursor-pointer'>Login <IoArrowForward className='mt-0.5' /></button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Auth
