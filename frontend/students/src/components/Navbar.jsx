import React from 'react'
import { FaCircle } from 'react-icons/fa'
import { RiDashboardFill } from 'react-icons/ri'

const Navbar = (props) => {
    return (
        <nav className='h-[65px] w-full border-b border-borderSecondary bg-white flex items-center justify-between sm:px-9 px-5 sticky top-[-1px]'>
            {<div className='flex items-center justify-center gap-1'>
                <h1 className='text-[18px] font-bold text-textSecondary'>{props.title}</h1>
            </div>}
            <div className='flex items-center gap-12 h-full py-3.5'>
            

                <div className='flex items-center gap-1.5 text-green-600'>
                    <FaCircle className='text-[8px]' />
                    <h2 className='font-extra text-[15px]'>{props.name}</h2>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
