import React from 'react'
import { BsBackpack, BsCreditCard2Front } from 'react-icons/bs'
import { TbBrandGoogleHome } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Navigations = (props) => {
    const page = props.page
    const visible = props.showprofile;
    const setVisible = props.setProfile;
  return (
    <>
    {(props.page==='Dashboard' || props.page==='Assignment') && <nav className='h-[60px] w-[550px] border border-borderPrimary shadow  fixed bottom-2 rounded-xl left-[50%] -translate-[50%] flex items-center justify-between px-12 py-1.5 gap-8 bg-white '>

        <Link to={'/'} className={` h-full flex-1 flex items-center justify-center rounded-xl text-[19px] cursor-pointer ${page==="Dashboard"? "bg-bgSecondary text-textWhite":"bg-bgPrimary text-textPrimary hover:bg-gray-100 transition-all ease-initial"}`}><TbBrandGoogleHome /></Link>
        <Link to={'/assignments'} className={` h-full flex-1 flex items-center justify-center rounded-xl text-[19px] cursor-pointer ${page==="Assignment"? "bg-bgSecondary text-textWhite":"bg-bgPrimary text-textPrimary hover:bg-gray-100 transition-all ease-initial"}`}><BsCreditCard2Front /></Link>
        <Link to={'/students'} className={` h-full flex-1 flex items-center justify-center rounded-xl text-[19px] cursor-pointer ${page==="Students"? "bg-bgSecondary text-textWhite":"bg-bgPrimary text-textPrimary hover:bg-gray-100 transition-all ease-initial"}`}><BsBackpack /></Link>
        <button onClick={()=>setVisible(!visible)} className={` h-full flex-1 flex items-center justify-center rounded-xl text-[19px] cursor-pointer ${page==="xyz"? "bg-bgSecondary text-textWhite":"bg-bgPrimary text-textPrimary hover:bg-gray-100 transition-all ease-initial"}`}>
            <img src="https://miro.medium.com/v2/resize:fit:1024/1*LqClB-Wa__W9WrNqP74I3Q.jpeg" className='h-[35px] w-[35px] rounded-full border-2 border-blue-600' />
        </button>

    </nav>}
    </>
  )
}

export default Navigations
