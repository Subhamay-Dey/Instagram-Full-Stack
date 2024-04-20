import React from 'react'
import SideMenuBar from './SideMenuBar'
import profilepic from "../images/profilepic.png"
import addpic from "../images/addpic.png"

const Profile = () => {

  return (
    <>
      <div className='w-ful h-screen bg-black relative'>
        <img className='ml-[408px] pt-6 pl-40' src={profilepic}/>
        <div className='absolute top-[8.3%] left-[48%] text-[26px] text-white'>subhamaydey2005</div>
        <button className='absolute top-[8.3%] left-[61%] text-white px-6 py-2 bg-slate-600 rounded-lg font-medium'>Edit Profile</button>
        <button className='absolute top-[8.3%] left-[68%] text-white px-6 py-2 bg-slate-600 rounded-lg font-medium ml-[4px]'>View Archive</button>
        <div className='absolute top-[15.6%] left-[48%] text-white space-x-12 font-medium text-[20px] flex flex-row'>
          <div>0 posts</div>
          <div>5 followers</div>
          <div>34 following</div>
        </div>

        <img className='absolute top-[28%] left-[28%] p-[20px]' src={addpic} alt="" />
        <div className='absolute top-[42%] left-[31%] p-[20px] text-white'>New</div>
        <div className="px-[600px] py-[0.4px] bg-gray-600 absolute top-[54%] left-[26%]"></div>
      </div>
    </>
  )
}

export default Profile