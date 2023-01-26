import React from 'react'

const About = () => {
  return (
    <div name ="About" className='w-full h-screen bg-zinc-800 text-white '>
        <div className=' max-w-screen-lg flex flex-col mx-auto justify-center h-full w-full px-4'>
            <div>
                <h1 className='pb-6 text-4xl sm:text-5xl capitalize font-starwar '>About Me</h1>
            </div>
            <p className='text-xl my-2'>I am a Nigerain born and raised, who moved to canada in 2020 january.
             I have always had an interest in coding, design and creating but began my tech journey in UX design .
             I am currently in the university of Ontario tech studying mechatronic engineering.</p>
             <br />
             <p className='text-xl my-2'>Stuff about code. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illo mollitia nisi 
                doloribus, dolorum consequuntur, corporis harum totam quidem blanditiis modi quos esse laborum, 
                ducimus repellat. Excepturi consequuntur veniam ut!</p>
            <br />
            <p className='text-xl my-2'>Short speech on my interest in biotech and machine learning</p>

        </div>

    </div>
  )
}

export default About