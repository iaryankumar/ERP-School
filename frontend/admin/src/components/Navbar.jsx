import React from 'react'
import { FaCircle } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { RiDashboardFill } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    const ctx = useSelector((state)=>state.data);
    const name = ctx.userData.name;
    return (
        <nav className='h-[75px] w-full border-b border-borderSecondary bg-white flex items-center justify-between px-9 sticky top-0'>
            { (props.title==='Dashboard' || props.title==='Assignments') &&  <div className='flex items-center justify-center gap-2'>
                <RiDashboardFill className='text-2xl text-textSecondary mt-0.5' />
                <h1 className='text-2xl font-bold text-textSecondary'>{props.title}</h1>
            </div>}
            {(props.title==='Students' || props.title==='Teachers') && <Link to={'/'} className='flex items-center justify-center gap-2'>
                <IoMdArrowRoundBack  className='text-2xl text-textSecondary mt-0.5' />
                <h1 className='text-2xl font-bold text-textSecondary'>{props.title}</h1>
            </Link>}
            <div className='flex items-center gap-12 h-full py-3.5'>

                {props.title=='Students' && <form className='h-full w-[450px] border border-borderSecondary rounded-full flex items-center py-0.5 pe-0.5 ps-5'>
                    <input type="text" placeholder='search students' className='flex-1 h-full flex items-center tracking-wide outline-none text-[15px] font-secondary font-thin text-gray-600' />
                    <div className='h-full w-[100px] bg-gray-300 rounded-r-full flex items-center justify-center text-white text-xl hover:bg-gray-700 transition-all ease-in-out cursor-pointer'><FiSearch /></div>
                </form>}

                <div className='flex items-center gap-1.5 text-green-600'>
                    <FaCircle className='text-[8px]' />
                    <h2 className='font-extra text-[15px]'>Welcome {name}</h2>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
