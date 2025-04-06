import React, { useState } from 'react'
import { BsBroadcast, BsIndent, BsTerminal } from 'react-icons/bs';
import { FaCircle } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io'
import { LiaRupeeSignSolid } from 'react-icons/lia';

const StudentsProfile = (props) => {
    const isVisible = props.isVisible;
    const setVisibility = props.visiblitySet;
    const details = props.details;
    const setDetails = props.setDetails;
    const sheet = details.attendance? details.attendance:[] ;
    console.log(sheet)
    const [personal, setPersonal] = useState(true);
    const [attednace, setAttednce] = useState(false);
    const handlePersonal = ()=>{
        setPersonal(true);
        setAttednce(false);
    }
    const handleAttendance = ()=>{
        setPersonal(false);
        setAttednce(true);
    }
    
    return (
        <>
            {isVisible && <div className='h-screen w-full fixed top-0 z-50 inset-0 before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.7)] flex items-center justify-center'>
                <div className='h-[90vh] w-[80%] bg-white relative rounded-xl overflow-auto'>

                    <div onClick={() => setVisibility(!isVisible)} className='h-[30px] w-[30px] bg-gray-100 rounded-full fixed top-7 right-7 flex items-center justify-center text-[22px] text-gray-600 cursor-pointer hover:bg-gray-200 transition-all ease-out'>
                        <IoIosClose />
                    </div>

                    <div className='h-[85px] w-full border-b border-borderSecondary  flex items-center'>
                        <div className='h-full flex items-center justify-center pl-7'>
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/029/985/913/small/student-struggling-to-carry-all-their-textbooks-ai-generated-photo.jpeg" alt="" className='h-[60px] w-[60px] rounded-full object-cover border-3 border-gray-400' />
                        </div>
                        <div className='flex-1  h-full flex flex-col justify-center ps-3'>
                            <h1 className='font-bold font-primary text-[17px] text-textPrimary'>{details.name} <span className='text-[13px] font-normal'>({details.uid})</span></h1>
                            <div className={`flex items-center text-[13px] gap-1 mr-7 text-blue-600 ${(details.status==='Waiting'&& 'text-amber-300') || (details.status==='Present'&& 'text-green-400') || (details.status==='Absent'&& 'text-red-400') } `}> <FaCircle className='text-[7px]' />{details.status}</div>
                        </div>
                    </div>

                    <div className='h-[70px] w-full flex items-center px-8 gap-7 sticky top-0 bg-bgPrimary z-10 '>
                        <div onClick={handlePersonal} className={`h-[40px] w-[200px] border border-borderPrimary rounded-[5px] flex items-center px-3 gap-1.5 text-textSecondary cursor-pointer text-[13px] `}>
                            <BsBroadcast className='text-[16px]' />
                            <h2>Personal</h2>
                        </div>
                        <div onClick={handleAttendance} className={`h-[40px] w-[200px] border border-borderPrimary rounded-[5px] flex items-center px-3 gap-1.5 text-textSecondary cursor-pointer text-[13px] `}>
                            <BsTerminal dcast className='text-[16px]' />
                            <h2>Attendance</h2>
                        </div>
                    </div>


                    {/* this is the personal info div */}
                    {personal&& <div>
                        <div className='h-max w-full flex flex-col px-9 py-3 pb-6 gap-4'>
                            <h1 className='font-bold ml-1 text-2xl text-textPrimary'>
                                Personal
                            </h1>
                            <div className=' flex flex-col font-primary gap-1'>
                                <label className='font-semibold text-textPrimary text-[14px] ml-2' >Name</label>
                                <input type="text" value={details.name} readOnly className='border border-borderPrimary px-2.5 py-2 rounded text-textSecondary font-primary text-[15px]' />
                            </div>
                            <div className=' flex flex-col font-primary gap-1'>
                                <label className='font-semibold text-textPrimary text-[14px] ml-2' >Father Name</label>
                                <input type="text" value={details.fatherName} readOnly className='border border-borderPrimary px-2.5 py-2 rounded text-textSecondary font-primary text-[15px]' />
                            </div>
                            <div className=' flex flex-col font-primary gap-1'>
                                <label className='font-semibold text-textPrimary text-[14px] ml-2' >Mother Name</label>
                                <input type="text" value={details.motherName} readOnly className='border border-borderPrimary px-2.5 py-2 rounded text-textSecondary font-primary text-[15px]' />
                            </div>

                            <div className=' flex flex-col font-primary gap-1'>
                                <label className='font-semibold text-textPrimary text-[14px] ml-2' >Aadhar Number</label>
                                <input type="text" value={details.aadhar} readOnly className='border border-borderPrimary px-2.5 py-2 rounded text-textSecondary font-primary text-[15px]' />
                            </div>
                            <div className=' flex flex-col font-primary gap-1'>
                                <label className='font-semibold text-textPrimary text-[14px] ml-2' >School Name</label>
                                <input type="text" value={details.schoolName} readOnly className='border border-borderPrimary px-2.5 py-2 rounded text-textSecondary font-primary text-[15px]' />
                            </div>
                        </div>
                        <div className='h-max w-full flex flex-col px-9 py-3 pb-6 gap-4'>
                            <h1 className='font-bold ml-1 text-2xl text-textPrimary'>
                                Acadamic
                            </h1>
                            <div className=' flex flex-col font-primary gap-1'>
                                <label className='font-semibold text-textPrimary text-[14px] ml-2' >Grade</label>
                                <input type="text" value={details.grade} readOnly className='border border-borderPrimary px-2.5 py-2 rounded text-textSecondary font-primary text-[15px]' />
                            </div>
                        </div>
                        <div className='h-max w-full flex flex-col px-9 py-3 pb-9 gap-4'>
                            <div className=' flex flex-col font-primary gap-1'>
                                <label className='font-semibold text-textPrimary text-[14px] ml-2' >Email</label>
                                <input type="text" value={details.email} readOnly className='border border-borderPrimary px-2.5 py-2 rounded text-textSecondary font-primary text-[15px]' />
                            </div>
                            <div className=' flex flex-col font-primary gap-1'>
                                <label className='font-semibold text-textPrimary text-[14px] ml-2' >Parents Email</label>
                                <input type="text" value={details.parentEmail} readOnly className='border border-borderPrimary px-2.5 py-2 rounded text-textSecondary font-primary text-[15px]' />
                            </div>
                            <div className=' flex flex-col font-primary gap-1'>
                                <label className='font-semibold text-textPrimary text-[14px] ml-2' >Phone</label>
                                <input type="text" value={details.phone} readOnly className='border border-borderPrimary px-2.5 py-2 rounded text-textSecondary font-primary text-[15px]' />
                            </div>
                            <div className=' flex flex-col font-primary gap-1'>
                                <label className='font-semibold text-textPrimary text-[14px] ml-2' >Parents Phone</label>
                                <input type="text" value={details.parentPhone} readOnly className='border border-borderPrimary px-2.5 py-2 rounded text-textSecondary font-primary text-[15px]' />
                            </div>
                            <div className=' flex flex-col font-primary gap-1'>
                                <label className='font-semibold text-textPrimary text-[14px] ml-2' >Address</label>
                                <input type="text" value={details.address} readOnly className='border border-borderPrimary px-2.5 py-2 rounded text-textSecondary font-primary text-[15px]' />
                            </div>
                        </div>
                    </div>}
                    {/* this is the personal info div */}

                    {/* this is attendance sheet */}
                    {attednace&&<div className='h-max w-full flex flex-col px-9 py-3 pb-6 gap-4'>
                            <h1 className='font-bold ml-1 text-2xl text-textPrimary'>
                                Session 2025-26
                            </h1>
                            <div className='h-max w-full py-2 grid gap-4 grid-cols-17 mt-4 px-3'>
                                {sheet?.map((ele) => {
                                    return <div title={ele.date} className={`h-[42px] w-full rounded-full font-bold text-textWhite flex items-center justify-center text-2xl cursor-pointer ${(ele.status==='W'&& 'bg-amber-300') || (ele.status==='P'&& 'bg-green-400') || (ele.status==='A'&& 'bg-red-400') }  `}><h1>{ele.status}</h1></div>
                                })}
                            </div>

                        </div>}
                    {/* this is attendance sheet */}

                </div>
            </div>}
        </>
    )
}

export default StudentsProfile
