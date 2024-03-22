import React from 'react'
import SideMenuBar from './SideMenuBar'
import Stories from './Stories'

const Home = () => {
  return (
    <>
      <div className='flex'>
        <SideMenuBar/>
        <Stories/>
      </div>
    </>
  )
}

export default Home