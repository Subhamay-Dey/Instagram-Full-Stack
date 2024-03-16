import React from 'react'
import img1 from "../images/img1.webp"
import img2  from "../images/img2.jpg"
import img3 from  "../images/img3.png"
import img4 from  "../images/img4.png"
import gsap from 'gsap';

const images = [
  img1,img2,img3,img4
]

const Home = () => {

  const [imageIndex, setImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
    <div className='w-[full] h-screen md:flex items-center justify-center space-x-10 '>
        <div className='select-none md:flex hidden'> <img src={images[imageIndex]} alt=""/>
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-white select-none">
        <header className="py-10">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdJMI9-ZdTJmpzVfjX6AL4rwRP8l-vWYDklw&usqp=CAU" alt="Instagram Logo" className="w-32" />
        </header>
        <main className="bg-gray-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Login to your account</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <h1 className='text-xl text-center'>New user <a className=' decoration-black underline cursor-pointer' href="/">Register</a></h1>
            <button
              type="button"
              className="w-full bg-blue-500 text-white py-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Login
            </button>
          </div>
        </main>
        </div>
    </div>
</>
  )
}

export default Home