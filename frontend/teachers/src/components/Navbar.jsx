import React from 'react'
import { FaCircle } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { RiDashboardFill } from 'react-icons/ri'

const Navbar = (props) => {
    return (
        <nav className='h-[85px] w-full border-b border-borderSecondary bg-white flex items-center justify-between sm:px-9 px-4 sticky top-[-1px]'>
            {<div className='flex items-center justify-center gap-1'>
                <RiDashboardFill className='text-xl text-textSecondary mt-0.5' />
                <h1 className='text-xl font-bold text-textSecondary'>{props.title}</h1>
            </div>}
            <div className='flex items-center gap-12 h-full py-3.5'>
            

                <div className='flex items-center gap-1.5 text-green-600'>
                    <FaCircle className='text-[8px]' />
                    <h2 className='font-extra text-[15px]'>Active</h2>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
