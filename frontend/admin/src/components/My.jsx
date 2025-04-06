import React from 'react'
import { MdOutlineExpandMore } from 'react-icons/md'
import { useSelector } from 'react-redux';

const My = (props) => {
    const ctx = useSelector((state)=>state.data);
    const data = ctx.userData;
    const visible = props.showprofile;
    const setVisible = props.setProfile;
  return (
    <>
    { visible&& <div className="fixed inset-0 p-3 flex flex-wrap justify-center items-start mt-12 w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.7)] overflow-auto font-[sans-serif]">
                <div className="w-full max-w-lg bg-bgPrimary shadow-lg rounded-sm px-6 pt-6 pb-3 relative h-max">
                    <div className="flex items-center bg-bgPrimary">
                        <h3 className="text-gray-800 text-[17px] font-mont font-bold flex-1 flex items-center gap-1.5">Admin</h3>
                        <div onClick={()=>setVisible(!visible)} className='p-2 rounded hover:bg-gray-200 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3  cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500" viewBox="0 0 320.591 320.591">
                                <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000" />
                                <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000" />
                            </svg>
                        </div>
                    </div>
                    {/* this is the main part */}
                    <div className="py-4">
                        <div className='h-[380px] w-full overflow-auto'>
                            {/* this is the top part */}
                            <div className='h-[60px] w-full flex items-center font-poppins gap-4 sticky top-0 bg-bgPrimary'>
                                <div className='h-full w-[max] flex items-center justify-center'>
                                    <img src='https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg' alt="image" className='h-[55px] w-[55px] rounded-full object-cover' />
                                </div>
                                <div className='h-max flex-1 flex flex-col gap-1 justify-center '>
                                    <h1 className='font-100 text-[13px] text-gray-900'>{data.name} <span>({data.uid})</span></h1>
                                    <h1 className='font-100 text-[13px] text-gray-900'>{data.email}</h1>

                                </div>
                            </div>
                            {/* this is the top part */}
                            {/* this is the persona part */}
                            <div className=' w-full  h-max px-2 pt-2 mt-5'>
                                <div className='h-max py-2 w-full border border-borderPrimary rounded px-3 flex flex-col gap-1'>
                                    <div className='w-full flex items-center justify-between'>
                                        <h1 className='font-100 text-[15px] text-textPrimary font-bold'>User Details</h1>
                                        <MdOutlineExpandMore className='cursor-pointer text-xl' />
                                    </div>
                                    <div className='h-max w-full  flex flex-col font-poppins'>
                                        <div className='h-max py-1 w-full  flex flex-col'>
                                            <h1 className='text-[13px] font-normal text-textPrimary'> Name</h1>
                                            <h1 className='text-[15px] tracking-wide'>{data.name}</h1>
                                        </div>
                                        
                                        <div className='h-max py-1 w-full  flex flex-col'>
                                            <h1 className='text-[13px] font-mid text-textPrimary'>Role</h1>
                                            <h1 className='text-[15px] tracking-wide'>Admin</h1>
                                        </div>
                                        <div className='h-max py-1 w-full  flex flex-col'>
                                            <h1 className='text-[13px] font-mid text-textPrimary'>School Name</h1>
                                            <h1 className='text-[15px] tracking-wide'>{data.schoolName}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* this is the persona part */}

                            {/* this is the contact part */}
                            <div className=' w-full  h-max px-2 pt-5 '>
                                <div className='h-max py-2 w-full border border-gray-300 rounded px-3 flex flex-col gap-1'>
                                    <div className='w-full flex items-center justify-between'>
                                        <h1 className='font-100 text-[15px] text-textPrimary font-bold'>Contact</h1>
                                        <MdOutlineExpandMore className='cursor-pointer text-xl' />
                                    </div>
                                    <div className='h-max w-full  flex flex-col gap-1 font-poppins'>
                                    <div className='h-max py-1 w-full  flex flex-col'>
                                            <h1 className='text-[13px] font-mid text-textPrimary'>Email</h1>
                                            <h1 className='text-[15px] tracking-wide'>{data.email}</h1>
                                        </div>
                                        <div className='h-max py-1 w-full  flex flex-col'>
                                            <h1 className='text-[13px] font-mid text-textPrimary'>Phone</h1>
                                            <h1 className='text-[15px] tracking-wide'>{data.phone}</h1>
                                        </div>
                                        <div className='h-max py-1 w-full  flex flex-col'>
                                            <h1 className='text-[13px] font-mid text-textPrimary'>Address</h1>
                                            <h1 className='text-[15px] tracking-wide'>{data.address}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* this is the contact part */}

                           
                        </div>
                    </div>
                    {/* this is the main part */}
                    <div className="border-t border-gray-200  flex justify-end gap-4 pt-3 pe-3">
                        <button type="button" className="px-4 py-1.5 rounded-sm bg-red-600 text-white text-[12px] outline-none tracking-wide hover:bg-red-800 cursor-pointer ">Forgot Password</button>
                    </div>
                </div>
            </div>}
    </>
  )
}

export default My
