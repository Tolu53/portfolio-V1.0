import React from 'react'
import Html from '../assets/html.png'
import css from '../assets/css.png'
import Github from '../assets/github.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import node from '../assets/node.png'
import reactimg from '../assets/react.png'
import java from '../assets/java.png'
import python from '../assets/python.png'




const Technologies = () => {

    const techs = [{
        id:1,
        src:Html,
        title:'HTML',
        style:'shadow-orange-500'
    },{
    id:2,
    src:css,
    title:'CSS',
    style:'shadow-blue-500'
},{
id:3,
src:javascript,
title:'Javascript',
style:'shadow-yellow-500'
},{
id:4,
src:Github,
title:'Github',
style:'shadow-white',
},{
id:5,
src:node,
title:'Node.js',
style:'shadow-lime-500',
},{
 id:6,
    src:tailwind,
    title:'Tailwind',
    style:'shadow-sky-400',
    }
    ,{
        id:7,
           src:reactimg,
           title:'React.js',
           style:'shadow-blue-600',
           }
           ,{
            id:8,
               src:java,
               title:'Java',
               style:'shadow-red-600',
               }
               ,{
                id:9,
                   src:python,
                   title:'Python',
                   style:'shadow-yellow-400',
                   }
]
  return (
    <div name="tech" className='bg-zinc-800 text-white  w-screen  py-7  md:py-1 '>
        <div className='p-4 flex flex-col max-w-screen-lg justify-center w-full h-full mx-auto'>
            <div>
                <p className='pb-6 text-3xl sm:text-5xl capitalize font-starwar p-2 inline'>Technolgies</p>
                <p className='text-xl py-4'>some of the technologies im familiar with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

             {
                techs.map(({id,src,title,style})=>(
<div key={id} className={`shadow-md hover:scale-105 duration-500 rounded-lg px-4 ${style}`}>
                    <img src={src} alt={title} className='w-20 mx-auto'/>
                    <p className='my-4'>{title}</p>
                </div>
                ))
             }
                
            </div>
        </div>
    </div>
  )
}

export default Technologies