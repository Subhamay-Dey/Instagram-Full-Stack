import React from 'react';
import SideMenuBar from './SideMenuBar';
import profilepic from "../images/profilepic.png";
import addpic from "../images/addpic.png";

import posticon from "../images/posticon.png";
import saveicon from "../images/saveicon.png";
import taggicon from "../images/taggicon.png";

import camerapic from "../images/camerapic.png";

import UseContext from '../contexts/UseContext';
import { useContext } from 'react';
import { ToastContainer } from 'react-toastify';

const Profile = () => {

  const {handleLogout} = useContext(UseContext);

  // const profile_menu = [
  //   {
  //     id: 1,
  //     Name: "Posts",
  //     icon: posticon,
  //   },
  //   {
  //     id: 2,
  //     Name: "Saved",
  //     icon: saveicon,
  //   },
  //   {
  //     id: 3,
  //     Name: "Tags",
  //     icon: taggicon,
  //   }
  // ]

  return (
    <>
    <ToastContainer/>
    <div className='flex flex-row'>
    <SideMenuBar/>
          <div className='w-[1614px] h-screen bg-black relative'>
            <img className='ml-[110px] pt-6 pl-40 cursor-pointer' src={profilepic}/>
            <div className='absolute top-[8.3%] left-[39%] text-[26px] text-white cursor-pointer'>subhamaydey2005</div>
            <button className='absolute top-[8.3%] left-[54%] text-white px-6 py-2 bg-gray-600 rounded-lg font-medium'>Edit Profile</button>
            <button className='absolute top-[8.3%] left-[62.4%] text-white px-6 py-2 bg-gray-600 rounded-lg font-medium ml-[4px]'>View Archive</button>
            <button className='absolute top-[8.3%] left-[76%] text-white px-6 py-2 bg-red-600 hover:bg-red-500 rounded-lg font-medium ml-[4px]' href="/logout" onClick={handleLogout}>Log Out</button>
            <div className='absolute top-[15.6%] left-[39%] text-white space-x-12 font-medium text-[20px] flex flex-row'>
              <div className="cursor-pointer">0 posts</div>
              <div className='cursor-pointer'>5 followers</div>
              <div className='cursor-pointer'>34 following</div>
            </div>

            <img className='absolute top-[28%] left-[15%] p-[20px] cursor-pointer' src={addpic} alt="" />
            
            <div className='absolute top-[42%] left-[18.5%] p-[20px] text-white'>New</div>
            <div className="px-[600px] py-[0.2px] bg-gray-600 absolute top-[54%] left-[14%]"></div>
            <div className="px-[50px] py-[0.8px] bg-white absolute top-[54%] left-[37.6%] rounded-xl"></div>

            {/* {profile_menu.map(({id, Name, icon}) => (
              <div className='absolute left-[40%] top-[60%] space-x-[20px]'>
                <div key={id} className='space-x-10'>
                <div className='font-[20px]'><img src={icon} /></div>
                <div className='text-white font-[10px]'>{Name}</div>
                </div>
              </div>
            ))} */}

            <div className='absolute left-[38%] top-[56%] flex flex-row space-x-20'>
              <div className='flex justify-center items-center cursor-pointer'>
                <img src={posticon}/>
                <div className='text-white text-[20px] '>POSTS</div>
              </div>
              <div className='flex justify-center items-center cursor-pointer'>
                <img  src={saveicon}/>
                <div className='text-white text-[20px] text-bold'>Saved</div>
              </div>
              <div className='flex justify-center items-center cursor-pointer'>
                <img src={taggicon}/>
                <div className='text-white text-[20px]'>Tagged</div>
              </div>
            </div>

            <div className='flex flex-col' >
              <img className='absolute left-[47%] top-[67%]' src={camerapic} alt=""/>
              <div className='text-white text-[40px] absolute left-[43.5%] top-[79%] font-extrabold'>Share photos</div>
              <div className='text-white absolute left-[38%] top-[87%] font-normal text-[18px]'>When you share photos, they will appear on your profile.</div>
              <div className="text-sky-500 hover:text-white absolute left-[45.4%] top-[93%] text-[18px] font-medium cursor-pointer"> Share your first photo</div>
            </div>

          </div>
    </div>
    </>
  )
}

export default Profile