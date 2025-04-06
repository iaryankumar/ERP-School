import React from 'react'
import Navbar from '../components/Navbar'
import Navigation from '../components/Navigation'
import { useSelector } from 'react-redux'

const Assignments = () => {
    const ctx=useSelector((state)=>state.data);
    const assignment = ctx.assignmentData
    const name = ctx.myData.name
    return (
        <>
            <Navbar title={'Assignments'} name={name}/>
            <Navigation page={'Assignments'} />
            <div className='w-full h-max py-3 grid md:grid-cols-4 grid-cols-1 sm:px-6 px-3 pt-4 sm:gap-12 gap-3 pb-28'>

                {/*  cards */}
                {
                    assignment?.map((ele, i) => {
                        return <div key={i} className='h-max w-full border border-borderSecondary shadow-2xs rounded py-1 ps-4 pe-4 cursor-pointer hover:border-1 hover:border-red-300 pb-2'>
                            <h1 className='text-[18px] font-semibold text-textSecondary mt-1'>{ele.title}</h1>
                            <p className='mt-2 text-[14.5px] text-textSecondary'>{ele.content}</p>
                            <div className='flex w-full items-center justify-between text-[13.5px] mt-1 text-gray-400 font-light'>
                                <h1># {ele.by}</h1>
                            </div>
                        </div>
                    })
                }
                {/*  cards */}

            </div>
        </>
    )
}

export default Assignments
