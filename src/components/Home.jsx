import React from 'react'
import HeroImage from '../assets/Heroimg.jpg'
import { FaGithub , FaLinkedin  } from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'


const Home = () => {
  return (
    <div name ="home" className='h-screen w-full bg-zinc-800 text-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div>
                <h1 className=' my-2 text-7xl sm:text-9xl capitalize font-starwar'>Hi Im tolu james</h1>
                <h2 className=' text-3xl sm:text-5xl capitalize font-starwar'> A software engineer and fullstack developer</h2>
                <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto et eius nostrum necessitatibus, itaque omnis! Explicabo quod odio ullam minus odit libero sit et eius assumenda! Et a aut nihil!</p>
                <div>
                    <a href="https://docs.google.com/document/d/1XCoBYSzPqKcysnjtDJ82U12ySV7tryR-zTk2DwC4O3E/edit" target="_blank">
                    <button className='w-fit px-6 py-3 my-2 flex items-center rounded-md bg-black cursor-pointer'>
                    About Me
                </button>
                    </a>
                
            </div>
            </div>
            <div className='w-2/3 md:w-100 '>
                <img src={HeroImage} alt="My-profile" className='rounded-2xl mx-auto w-100 md:w-full'/>
                <div className='py-4'>
                <ul className='px-4 flex justify-between items-center'>
        <li className='px-4'>
            <a href="https://www.linkedin.com/in/tolu-james-8a38b71a9/" target="_blank" className='flex justify-between items-center px-4 cursor-pointer '>
                <><FaLinkedin size={40} />
                </>
            </a>
        </li>
        <li className='px-4'>
            <a href="https://github.com/Tolu53"  target="_blank" className='flex justify-between items-center px-4'>
                <><FaGithub size={40} />
                </>
            </a>
        </li>
        <li className='px-4'>
            <a href="" className='flex justify-between items-center px-4'>
                <><AiOutlineMail size={40} />
                </>
            </a>
        </li>
       </ul>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Home