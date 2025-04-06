import React, { useState } from 'react'
import { PiWarningCircle } from 'react-icons/pi'
import { toast } from 'react-toastify'
import axiosInstance from '../api/axiosInstance'

const AddStudents = () => {
    const [details,setDeatils]= useState({
        name:'',
        fatherName:"",
        motherName:'',
        aadhar:'',
        address:'',
        email:'',
        parentEmail:'',
        phone:'',
        parentPhone:'',
        grade:'',
    })
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const res = await axiosInstance.post('/admin/addStudent', details)
            console.log(res)
            if (res.status == 201) {
                toast.success(res.data.message, { position: 'top-center' })
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response?.data.message? error.response.data.message:error.response.data.msg, { position: 'top-center' })
        }
    }
  return (
    <>
    <div className='h-[70px] w-full bg-bgSecondary text-gray-300 flex items-center px-6'>

<div className='flex items-center justify-center gap-2 cursor-pointer font-primary tracking-wide font-light text-[25px]'>
    <PiWarningCircle />
    <h1 className='text-[13px] mt-1'>Please fill all the details correctly . you can't edit after submission</h1>
</div>

</div>
<div className='flex items-center justify-center'>
<form onSubmit={handleSubmit} className='h-max w-[90%]  border border-borderPrimary rounded shadow-xl mt-4 mb-4 px-6 py-3 pb-12'>
    {/* this is the personal section */}
    <div className='h-[50px] w-full border-b border-borderSecondary flex items-center text-[18px] font-bold'>
        <h1>Personal Details</h1>
    </div>
    <div className='flex flex-col gap-5 font-primary mt-6 pe-12'>
        {/* This is the input  */}
        <div className='flex items-center gap-3'>
            <label htmlFor="name" className='font-semibold text-midFont text-[14px] w-[120px]'> Candidate Name :</label>
            <input name='name' onChange={(e)=>setDeatils({...details,[e.target.name]:e.target.value})}  type="text" id="name" className='border border-borderSecondary shadow rounded flex-1 py-2.5 px-2 outline-none text-[14px] font-normal' required />
        </div>
        <div className='flex items-center gap-'>
            <label htmlFor="fname" className='font-semibold text-midFont text-[14px] w-[130px]'> Father's Name :</label>
            <input name='fatherName' onChange={(e)=>setDeatils({...details,[e.target.name]:e.target.value})} type="text" id="fname" className='border border-borderSecondary shadow rounded flex-1 py-2.5 px-2 outline-none text-[14px] font-normal' required />
        </div>
        <div className='flex items-center gap-'>
            <label htmlFor="mname" className='font-semibold text-midFont text-[14px] w-[130px]'> Mother's Name :</label>
            <input name='motherName' onChange={(e)=>setDeatils({...details,[e.target.name]:e.target.value})} type="text" id="mname" className='border border-borderSecondary shadow rounded flex-1 py-2.5 px-2 outline-none text-[14px] font-normal' required />
        </div>
        <div className='flex items-center gap-'>
            <label htmlFor="aadhar" className='font-semibold text-midFont text-[14px] w-[130px] text-center'> Aadhar :</label>
            <input name='aadhar' onChange={(e)=>setDeatils({...details,[e.target.name]:e.target.value})} id='aadhar' type="number" className='border flex-1 border-borderSecondary shadow rounded py-2.5 px-2 pe-6 outline-none text-[14px] font-normal' required />
        </div>
        {/* This is the input  */}

    </div>
    {/* this is the personal section */}

    {/* this is the contact section */}
    <div className='h-[50px] w-full border-b border-borderSecondary flex items-center text-[18px] font-bold  mt-12'>
        <h1>Contact Details</h1>
    </div>
    <div className='flex flex-col gap-5 font-primary mt-6 pe-12'>
        {/* This is the input  */}
        <div className='flex items-center gap-3'>
            <label htmlFor="email" className='font-semibold text-midFont text-[14px] w-[120px]'> Candidate Email :</label>
            <input name='email' onChange={(e)=>setDeatils({...details,[e.target.name]:e.target.value})} type="email" id="email" className='border border-borderSecondary shadow rounded flex-1 py-2.5 px-2 outline-none text-[14px] font-normal' required />
        </div>
        <div className='flex items-center gap-'>
            <label htmlFor="pemail" className='font-semibold text-midFont text-[14px] w-[130px]'> Parent's Email :</label>
            <input name='parentEmail' onChange={(e)=>setDeatils({...details,[e.target.name]:e.target.value})} type="email" id="pemail" className='border border-borderSecondary shadow rounded flex-1 py-2.5 px-2 outline-none text-[14px] font-normal' required />
        </div>
        <div className='flex items-center gap-'>
            <label htmlFor="phone" className='font-semibold text-midFont text-[14px] w-[130px]'> Candidate Phone :</label>
            <input name='phone' onChange={(e)=>setDeatils({...details,[e.target.name]:e.target.value})} id='phone' type="number" className='border flex-1 border-borderSecondary shadow rounded py-2.5 px-2 pe-6 outline-none text-[14px] font-normal' required />
        </div>
        <div className='flex items-center gap-'>
            <label htmlFor="apar" className='font-semibold text-midFont text-[14px] w-[130px]'> Parent's Phone :</label>
            <input name='parentPhone' onChange={(e)=>setDeatils({...details,[e.target.name]:e.target.value})} id='apar' type="number" className='border flex-1 border-borderSecondary shadow rounded py-2.5 px-2 pe-6 outline-none text-[14px] font-normal' required />
        </div>
        <div className='flex items-center gap-3'>
            <label htmlFor="add" className='font-semibold text-midFont text-[14px] w-[115px]'> Full Address :</label>
            <input name='address' onChange={(e)=>setDeatils({...details,[e.target.name]:e.target.value})} type="text" id="add" className='border border-borderSecondary shadow rounded flex-1 py-2.5 px-2 outline-none text-[14px] font-normal' required />
        </div>
        {/* This is the input  */}

    </div>
    {/* this is the contact section */}

    {/* this is acadamic section */}
    <div className='h-[50px] w-full border-b border-borderSecondary flex items-center text-[18px] font-bold  mt-12'>
        <h1>Acadamic Details</h1>
    </div>
    <div className='flex flex-col gap-5 font-primary mt-6 pe-12'>
        {/* This is the input  */}
        <div className='flex items-center gap-3'>
            <label htmlFor="grade" className='font-semibold text-midFont text-[14px] text-center w-[120px]'> Grade :</label>
            <select name='grade' onChange={(e)=>setDeatils({...details,[e.target.name]:e.target.value})} id="grade" className='border border-borderSecondary shadow rounded py-2.5 px-2 pe-6 outline-none text-[14px] font-normal appearance-none flex-1' required>
                <option value="">Select Grade</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>
        </div>
        

    </div>
    {/* this is acadamic section */}
    <div className=' flex justify-end pe-12'>
        <button className=' h-[40px] w-[150px] text-[14px] hover:bg-[#272727] cursor-pointer bg-bgSecondary text-textWhite rounded mt-12'> Submit</button>
    </div>


</form>
</div>
    </>
  )
}

export default AddStudents
