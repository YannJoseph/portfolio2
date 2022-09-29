import React from 'react'
// import emailjs from '@emailjs/browser';

function Contact() {

    // const sendEmail = (e) => {
    //     e.preventDefault();
    
    //     emailjs.sendForm('Yahoo', '', e.target, 'undmg62h-2s5ibIR7')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //       e.target.reset()
    //   };

  return (

    <div name="contact"
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black w-full h-screen text-white'>
        <div className=' flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                Contact
                </p>
                <p className='py-6'>
                    Submit the form below to get in touch with me
                </p>
            
            </div>

            <div className='flex justify-center items-center'>
    <form  action="https://getform.io/f/0f87d34e-100b-4dfa-9d6d-6d0aea70ba88" method='POST' className='flex flex-col w-full md:w-1/2'>

    <input 
    type="text" 
    name="name" 
    placeholder='Enter your name' 
    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

    <input 
    type="text" 
    name="email" 
    placeholder='Enter your email' 
    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

    <textarea 
    name="message" 
    rows="10" 
    placeholder='Enter your message'
    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
    ></textarea>

<button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Submit</button>

    </form>
            </div>
    
      

        </div>
    </div>
    
       
  )
}

export default Contact