import React from 'react'

const About = () => {
  return (
    <div name ="About" className='w-full h-screen bg-zinc-800 text-white '>
        <div className=' max-w-screen-lg flex flex-col mx-auto justify-center h-full w-full px-4'>
            <div>
                <h1 className='pb-6 text-4xl sm:text-5xl capitalize font-starwar '>About Me</h1>
            </div>
            <p className='text-lg my-2 md:text-xl'>My interest in coding, design and creating led me to pursue a career in the tech industry.
             In 2020, I moved from Nigeria to Canada to further my education and career opportunities in the tech field. I am currently studying 
             Mechatronic Engineering at the University of Ontario Institute of Technology. I am excited to continue learning and expanding my
              skills in the field of software engineering, machine learning  and mechatronics, and to use my unique background and perspectives to bring 
              innovative solutions to the industry.</p>
             <br />
             <p className='text-lg my-2 md:text-xl'>I took a liking to coding because the environment is constantly growing which enables continuous growth. It also give you the ability to solve problems 
             that seemed impossible at first, and it provides a creative outlet for me to express myself and make a positive impact on the world. </p>
            <br />
            <p className='text-lg my-2 md:text-xl'>i have also developed a keen interest in Machine Learning and agriculture. </p>
        </div>

    </div>
  )
}

export default About