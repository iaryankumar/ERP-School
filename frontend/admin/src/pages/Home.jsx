import React, { useState } from 'react'
import Loader from '../components/Loader'
import Navigations from '../components/Navigations'
import Navbar from '../components/Navbar'
import { BsBoxes } from 'react-icons/bs'
import { TbPointFilled } from 'react-icons/tb'
import { IoIosAdd } from 'react-icons/io'
import { GrFormNextLink } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import My from '../components/My'

const Home = () => {
  const [profileVisible,setProfile]=useState(false)
  
  return (
    <>
      <My showprofile={profileVisible} setProfile={setProfile}/>
      <Navbar title={'Dashboard'} />
      <Navigations page={"Dashboard"} showprofile={profileVisible} setProfile={setProfile} />
      <div className='h-max w-full grid grid-cols-3 px-6 gap-12  pt-10'>
        {/*  cards */}
        <div className='h-[150px] w-full border border-borderSecondary shadow-2xs rounded py-1 ps-4 pe-4 cursor-pointer hover:border-1 hover:border-borderHover'>
          <div className='h-[40px] w-full flex items-center justify-between'>
            <h1 className='text-[17px] font-semibold text-textSecondary'> Students </h1>
            <Link to={'/add-alumini'} className='h-[35px] w-[130px] rounded flex items-center ps-2 text-blue-600 hover:underline'> <IoIosAdd /> <h1 className='text-[12px] font-semibold'>Add Student</h1> </Link>
          </div>
          <div className='h-max mt-5 w-full  flex items-center ps-2 sm:gap-5 gap-3'>
            <BsBoxes className='text-4xl text-textPrimary' />
            <div className='flex items-end gap-1'><h1 className='text-2xl font-semibold'>250</h1> <span className='text-[18px] text-textSecondary'>/</span> <span>1000</span></div>
          </div>
        </div>
        {/*  cards */}
        {/*  cards */}
        <div className='h-[150px] w-full border border-borderSecondary rounded py-1 ps-4 pe-4 cursor-pointer shadow-2xs hover:border-1 hover:border-borderHover'>
          <div className='h-[40px] w-full flex items-center justify-between'>
            <h1 className='text-[17px] font-semibold text-textSecondary'> Teachers </h1>
            <div className='h-[35px] w-max rounded flex items-center ps-2 text-blue-600 gap-3'> <Link to={'/add-teacher'} className='flex items-center justify-center hover:underline'><IoIosAdd /> <h1 className='text-[12px] font-semibold '>Add Teacher</h1></Link> <Link to={'/teachers'} className='text-[12px] font-semibold hover:underline'>All Teachers</Link> </div>
          </div>
          <div className='h-max mt-5 w-full  flex items-center ps-2 sm:gap-5 gap-3'>
            <BsBoxes className='text-4xl text-textPrimary' />
            <div className='flex items-end gap-1'><h1 className='text-2xl font-semibold'>250</h1> <span className='text-[18px] text-textSecondary'>/</span> <span>1000</span></div>
          </div>
        </div>
        {/*  cards */}
         {/*  cards */}
         <div className='h-[150px] w-full border border-borderSecondary rounded py-1 ps-4 pe-4 cursor-pointer shadow-2xs hover:border-1 hover:border-borderHover'>
          <div className='h-[40px] w-full flex items-center justify-between'>
            <h1 className='text-[17px] font-semibold text-textSecondary'> Assignment </h1>
            <Link to={'/assignments'} className='h-[35px] w-max rounded flex items-center ps-2 text-blue-600 gap-3'> <div className='flex items-center justify-center hover:underline'><h1 className='text-[12px] font-semibold '>All Assignment</h1><GrFormNextLink /></div> </Link>
          </div>
          <div className='h-max mt-5 w-full  flex items-center ps-2 sm:gap-5 gap-3'>
            <BsBoxes className='text-4xl text-textPrimary' />
            <div className='flex items-end gap-1'><h1 className='text-2xl font-semibold'>250</h1> <span className='text-[18px] text-textSecondary'>/</span> <span>1000</span></div>
          </div>
        </div>
        {/*  cards */}
      </div>

      <div>
      
      
{/* <div className="max-w-sm w-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-4 md:p-6">
  <div className="flex justify-between mb-5">
    <div className="grid gap-4 grid-cols-2">
      <div>
        <h5 className="inline-flex items-center text-gray-500 dark:text-gray-400 leading-none font-normal mb-2">Clicks
          <svg data-popover-target="clicks-info" data-popover-placement="bottom" className="w-3 h-3 text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <div data-popover id="clicks-info" role="tooltip" className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400">
            <div className="p-3 space-y-2">
              <h3 className="font-semibold text-gray-900 dark:text-white">Clicks growth - Incremental</h3>
              <p>Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend, as stagnating chart signifies a significant decrease of community activity.</p>
              <h3 className="font-semibold text-gray-900 dark:text-white">Calculation</h3>
              <p>For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n, plus the activities generated by your community in period.</p>
              <a href="#" className="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:underline">Read more <svg className="w-2 h-2 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                </svg></a>
            </div>
            <div data-popper-arrow />
          </div>
        </h5>
        <p className="text-gray-900 dark:text-white text-2xl leading-none font-bold">42,3k</p>
      </div>
      <div>
        <h5 className="inline-flex items-center text-gray-500 dark:text-gray-400 leading-none font-normal mb-2">CPC
          <svg data-popover-target="cpc-info" data-popover-placement="bottom" className="w-3 h-3 text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <div data-popover id="cpc-info" role="tooltip" className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400">
            <div className="p-3 space-y-2">
              <h3 className="font-semibold text-gray-900 dark:text-white">CPC growth - Incremental</h3>
              <p>Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend, as stagnating chart signifies a significant decrease of community activity.</p>
              <h3 className="font-semibold text-gray-900 dark:text-white">Calculation</h3>
              <p>For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n, plus the activities generated by your community in period.</p>
              <a href="#" className="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:underline">Read more <svg className="w-2 h-2 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                </svg></a>
            </div>
            <div data-popper-arrow />
          </div>
        </h5>
        <p className="text-gray-900 dark:text-white text-2xl leading-none font-bold">$5.40</p>
      </div>
    </div>
    <div>
      <button id="dropdownDefaultButton" data-dropdown-toggle="lastDaysdropdown" data-dropdown-placement="bottom" type="button" className="px-3 py-2 inline-flex items-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Last week <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
        </svg></button>
      <div id="lastDaysdropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yesterday</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Today</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 7 days</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 30 days</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 90 days</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div id="line-chart" />
  <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between mt-2.5">
    <div className="pt-5">      
      <a href="#" className="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg className="w-3.5 h-3.5 text-white me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2Zm-3 15H4.828a1 1 0 0 1 0-2h6.238a1 1 0 0 1 0 2Zm0-4H4.828a1 1 0 0 1 0-2h6.238a1 1 0 1 1 0 2Z" />
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
        </svg>
        View full report
      </a>
    </div>
  </div>
</div> */}




      </div>
    </>
  )
}

export default Home
