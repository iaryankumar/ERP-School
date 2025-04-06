import React from 'react'
import { BsCreditCard2Front } from 'react-icons/bs'
import { TbBrandGoogleHome } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Navigation = (props) => {
  const page = props.page
  return (
    <>
      <nav className='h-[55px] w-full border-t border-borderPrimary shadow  fixed bottom-[-27.5px]  left-[50%] -translate-[50%] flex items-center justify-between px-12 py-2 gap-8 bg-white '>

        <Link to={'/'} className={` h-full flex-1 flex items-center justify-center rounded-xl text-[19px] cursor-pointer ${page === "Home" ? "bg-bgSecondary text-textWhite" : "bg-bgPrimary text-textPrimary hover:bg-gray-100 transition-all ease-initial"}`}><TbBrandGoogleHome /></Link>
        <Link to={'/assignment'} className={` h-full flex-1 flex items-center justify-center rounded-xl text-[19px] cursor-pointer ${page === "Assignments" ? "bg-bgSecondary text-textWhite" : "bg-bgPrimary text-textPrimary hover:bg-gray-100 transition-all ease-initial"}`}><BsCreditCard2Front /></Link>

      </nav>
    </>
  )
}

export default Navigation
