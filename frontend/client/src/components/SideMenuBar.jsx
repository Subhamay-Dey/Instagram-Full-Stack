import React from 'react';
import instalogo1  from "../images/insta-logo1.jpg";
import { useNavigate} from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import messages_logo from "../images/insta-messages-logo.png";
import reels_logo from "../images/insta-reels-logo.png";
import { IoMdHeartEmpty } from "react-icons/io";
import create from "../images/insta-create-logo.png";
import profile_logo from "../images/insta-profile-logo.png";
import { FaThreads } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdOutlineAddBox } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const SideMenuBar = () => {

  const navigate = useNavigate();

  const menu = [
    {
      id: 1,
      Name: "Home",
      icon: <IoMdHome size={30}/>,
      route: "/home",
    },
    {
      id: 2,
      Name: "Search",
      icon: <IoIosSearch size={30}/>,
      route: "/search",
    },
    {
      id: 3,
      Name: "Explore",
      icon: <MdOutlineExplore size={30}/>,
      route: "/explore",
    },
    {
      id: 4,
      Name: "Reels",
      // icon: reels_logo,
      icon: <MdOutlineVideoLibrary size={30}/>,
      route: "/reels",
    },
    {
      id: 5,
      Name: "Messages",
      // icon: messages_logo,
      icon: <BiSolidMessageRoundedDetail size={30}/>,
      route: "/messages",
    },
    {
      id: 6,
      Name: "Notifications",
      icon: <IoMdHeartEmpty size={30}/>,
      route: "/notifications",
    },
    {
      id: 7,
      Name: "Create",
      // icon: create,
      icon: <MdOutlineAddBox size={30}/>,
      route: "/create",
    },
    {
      id: 8,
      Name: "Profile",
      // icon: profile_logo,
      icon: <CgProfile size={30}/>,
      route: "/profile",
    },
    {
      id: 9,
      Name: "Threads",
      icon: <FaThreads size={30}/>,
      route: "/threads",
    },
    {
      id: 10,
      Name: "More",
      icon: <LuMenu size={30}/>,
      route: "/more",
    }
  ]

  return (
    <>
    <div className='flex flex-row'>
        <div className='w-[300px] h-screen bg-black '>
            <div>
              <img src={instalogo1} alt="" width={200} className='pt-4 pl-2'/>
            </div>
            {menu.map(({id, Name, icon, route}) => (
                <div className='flex gap-3 mt-6 w-[200px] mx-4 cursor-pointer hover:bg-slate-400 rounded-xl px-6 duration-300 py-2 select-none pl-8 items-center' key={id} onClick={() => navigate(route)}>
                    <div className='text-white'>{icon}</div>
                    <h1 className='mb-1 text-xl text-white'>{Name}</h1>
                </div>
            ))}
            
        </div>
        <div className='px-[0.4px] py-full bg-gray-600'>
        </div>
      </div>
    </>
  )
}

export default SideMenuBar