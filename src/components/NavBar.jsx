import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from '../assets/Logo.png'
import {Link} from  'react-scroll'

const NavBar = () => {
  const [nav, setNav] = useState (false);


  const links = [
    {
      id:1,
      link:"home"
    },
    {
      id:2,
      link:"About"
    },
    {
      id:3,
      link:"projects"
    },
    {
      id:4,
      link:"contact"
    }
  ]
  return (
    <div className='flex justify-between items-center w-full h-20  bg-black px-4 text-white'>
      <div className='w-20'>
        <img className=''  src={logo} alt="Logo" />
      </div>
      <ul className='hidden md:flex'>
        {/* loop through instead of having multiple */}
        {links.map(({ id, link}) =>(
          <li key={id} className='px-4 cursor-pointer first-letter:capitalize font-medium
           hover:scale-105 duration-200'>
            <Link to={link} smooth duration={500} >{link}</Link>
            </li>
        ))
        }

      </ul>
      {/* switch from strokes to drop down  */}
      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden  '>
        { nav ? < FaTimes size={30}/>: <FaBars size={30} />}
      </div>
      {/* switch in between */}
      {nav &&(
 <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-2/3 bg-black text-white'>

 {links.map(({ id, link}) =>(
     <li key={id} className='px-4 cursor-pointer first-letter:capitalize py-6 text-2xl 
     hover:scale-105'>
       <Link to={link} smooth duration={500} >{link}</Link>
            </li>
   ))}
 </ul>
      )}
   
     
      </div>
  )
}

export default NavBar