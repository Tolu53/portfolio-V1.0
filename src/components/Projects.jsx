import React from 'react'
// import Codewiz from '..assets/projects/Codewiz'
// import Afcreate from '..assets/projects/Afcreate'
// import snake from '..assets/projects/snakeJava'
 import simon from '../assets/projects/simon.png'
// import Codewiz from '..assets/projects/Codewiz'

const Projects = () => {
  return (
    <div name= "projects" className='text-white  bg-zinc-800 w-full md:h-screen '>
        <div className='max-w-screen-lg flex flex-col mx-auto justify-center h-full w-full px-4 '>
            <div className='pb-6'>
            <p className='text-xl'>Some of the stuff ive worked on</p>
                <h1 className='pb-6 text-3xl sm:text-5xl capitalize font-starwar '>Projects</h1>
            </div>
            {/* card div */}
            <div className='grid '>
                <div className='shadow-md shadow-gray-600 rounded-md '>
                    <h1 className=' text-3xl'>Simon Game</h1>
                    <img src={simon} alt="" className='rounded-md duration-200 hover:scale-105' />
                    <div className=' px-4 py-4 flex items-center justify-center'>
                        <button className='duration-200 hover:underline px-6 w-1/2 border-r'>Test Me </button>
                        <button className='duration-200 hover:underline px-6 w-1/2'>Code</button>
                    </div>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Projects