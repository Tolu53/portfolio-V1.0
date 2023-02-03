import React from 'react'
// import Codewiz from '..assets/projects/Codewiz'
// import Afcreate from '..assets/projects/Afcreate'
// import snake from '..assets/projects/snakeJava'
import delkolt from '../assets/projects/Delkolt.png'
 import simon from '../assets/projects/simon.png'
// import Codewiz from '..assets/projects/Codewiz'

const Projects = () => {
    const Proj= [{
        id:1,
        src: simon,
        title:'Simon Game',
    },{
        id:2,
        src: delkolt,
        title:'Delkolt website',
    }

]
  return (


    <div name= "projects" className='text-white  bg-zinc-800 w-full h-full py-7  md:py-1 '>
        <div className='max-w-screen-lg flex flex-col mx-auto justify-center h-full w-full px-4 '>
            <div className='pb-6'>
            <p className='text-xl'>Some of the stuff ive worked on</p>
                <h1 className='pb-6 text-3xl sm:text-5xl capitalize font-starwar '>Projects</h1>
            </div>
            {/* card div */}
            <div className='grid '>
                <div className=' rounded-md pb-4'>
                {
                Proj.map(({id,src,title})=>(
               <>
               <div className='' key={id}>
                        <h1 className=' text-3xl'>{title}</h1>
                        <img src={src} alt={title} className='rounded-md w-full duration-200 hover:scale-105' />
                    </div>
                    <div className=' mb-20 px-4 py-4 flex items-center justify-center shadow-md shadow-gray-600'>
                            <button className='duration-200 hover:underline px-6 w-1/2 border-r'>Test Me </button>
                            <button className='duration-200 hover:underline px-6 w-1/2'>Code</button>
                        </div></>
                ))
             }
                  
                   
                    
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Projects