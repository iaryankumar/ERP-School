import React from 'react'
import Navbar from '../components/Navbar'
import Navigation from '../components/Navigation'
import { useSelector } from 'react-redux'

const Home = () => {
    const ctx = useSelector((state)=>state.data);
    const name = ctx.myData.name
    const sheet = ctx.myData.attendance;
    console.log(sheet)
    return (
        <>
            <Navbar title={'Home'} name={name}/>
            <Navigation page={'Home'}/>
            <div className='w-full h-max py-3 grid md:grid-cols-4 grid-cols-1 sm:px-6 px-3 pt-3 sm:gap-12 gap-3 pb-28'>
                {/*  cards */}
                {
                    sheet?.map((ele, i) => {
                        return <div key={i} className={`h-max w-full shadow-2xs rounded py-0.5 ps-4 pe-4 cursor-pointer hover:border-1 hover:border-red-300 pb-2 ${(ele.status==='A'&&"bg-red-100")||(ele.status==='P'&&"bg-green-100")||(ele.status==='W'&&'bg-yellow-100')}`}>
                            <h1 className='text-[15px] font-semibold text-textSecondary mt-2'>{ele.date}</h1>

                            <div className='flex w-full items-center justify-between text-[15px] text-gray-400 font-light'>
                                <h1>{(ele.status==='A'&&"Absent")||(ele.status==='P'&&"Present")||(ele.status==='W'&&'Waiting')}</h1>
                            </div>
                        </div>
                    })
                }
                {/*  cards */}

            </div>
        </>
    )
}

export default Home
