import React from 'react'
import HeroImage from '../assets/Heroimg.jpg'
import { FaGithub , FaLinkedin  } from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {Link} from  'react-scroll'

 
const Home = () => {
  return (
    <div name ="home" className=' py-4  md:py-10 h-screen w-full bg-zinc-800 text-white '>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 sm:flex-row'>
            <div>
                <h1 className=' my-2 text-5xl sm:text-9xl capitalize font-starwar'>Hi Im tolu james</h1>
                <h2 className=' text-2xl sm:text-5xl capitalize font-starwar'> A software engineer and fullstack developer</h2>
                <p className='text-md md:text-xl'>Welcome to my website! Here, you will find information on my skills, experience,
                 and projects. Browse through my portfolio and contact me for more information on how I can help bring your ideas to life.</p>
                <div>
                    
                    <Link to= "About" smooth duration={500} className='w-fit px-6 py-3 my-2 flex items-center rounded-md bg-black cursor-pointer'>
                    About Me
                </Link>

                
            </div>
            </div>
            <div className=' flex flex-col justify-center items-center mx-auto'>
            <div className='w-2/3 '>
                <img src={HeroImage} alt="My-profile" className='rounded-2xl mx-auto  md:w-full'/>
                <div className='py-4'>
                <ul className='flex justify-between items-center'>
        <li className=''>
            <a href="https://www.linkedin.com/in/tolu-james-8a38b71a9/"  className='flex justify-between  px-4 cursor-pointer '>
                <><FaLinkedin size={40} />
                </>
            </a>
        </li>
        <li className=''>
            <a href="https://github.com/Tolu53"   className='flex justify-between  px-4'>
                <><FaGithub size={40} />
                </>
            </a>
        </li>

        <Link to='contact' smooth duration={500} className='flex justify-between  px-4'>
         <li className=''>
        <><AiOutlineMail size={40} />
                </>
                </li>
        </Link>   
       
        </ul>
            </div>
         
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Home