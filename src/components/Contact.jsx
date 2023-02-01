import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className= ' w-full h-full bg-zinc-800  p-4 text-white'>
        <div className='flex flex-col mx-auto w-full max-w-screen-lg p-4 justify-center'>
            <div className=''>
                <p className='text-3xl sm:text-5xl capitalize font-starwar'  >talk to me</p>
            </div>
            <div >
                <form action="https://getform.io/f/abc81f29-03dc-475e-a353-27ac13da9db3" method='post'
                 className='flex flex-col'>
                    <h1 className='text-xl'>Name</h1>
                    <input type="text" name='name' placeholder='Enter your name'
                    className='p-2 bg-white text-black outline-none mb-4'/>
                    <h1 className='text-xl'>Email</h1>
                       <input type="text" name='Email' placeholder='Enter your Email'
                    className='p-2 bg-white text-black focus:outline-none mb-4'/>
                    <h1 className='text-xl'>Subject</h1>
                    <textarea name="message"  className='p-2 bg-white text-black focus:outline-none' 
                    rows="10" placeholder='Say hello'></textarea>
                    <button className=' text-white bg-red-700 px-6 py-3 my-8 mx-auto flex 
                    items-center rounded-md'>Hey talk to me </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact