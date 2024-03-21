import React from 'react';
import instalogo1  from "../images/insta-logo1.jpg";
import {useNavigate} from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";

const SideMenuBar = () => {

  const navigate = useNavigate();

  const menu = [
    {
      id: 1,
      Name: "Home",
      icon: <IoMdHome />,
      route: "/home",
    },
    {
      id: 2,
      Name: "Search",
      icon: <IoIosSearch />,
      route: "/search",
    },
    {
      id: 3,
      Name: "Explore",
      icon: <MdOutlineExplore />,
      route: "/explore",
    },
    {
      id: 4,
      Name: "Reels",
      icon: <MdVideoLibrary />,
      route: "/reels",
    },
    {
      id: 5,
      Name: "Messages",
      icon: {},
      route: "/messages",
    },
    {
      id: 6,
      Name: "Notifications",
      icon: {},
      route: "/notifications",
    },
    {
      id: 7,
      Name: "Create",
      icon: {},
      route: "/create",
    },
    {
      id: 8,
      Name: "Profile",
      icon: {},
      route: "/profile",
    },
    {
      id: 9,
      Name: "Threads",
      icon: {},
      route: "/threads",
    },
    {
      id: 10,
      Name: "More",
      icon: {},
      route: "/more",
    }
  ]

  return (
    <>
        <div className='w-[300px] h-screen bg-black'>
            <div>
              <img src={instalogo1} alt="" width={200} className='pt-4 pl-2'/>
            </div>
            

            
        </div>
    </>
  )
}

export default SideMenuBar