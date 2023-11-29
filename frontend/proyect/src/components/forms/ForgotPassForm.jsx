import React from 'react'
import Btn from '../Button/Btn';

const ForgotPassForm = () => {
    return (
        <div className=' w-2/6 flex flex-col mx-auto min-h-screen justify-center'>
            <h4 className='mx-auto text-2xl text-white text-center m-3 font-semibold font-style: italic font'>Your email</h4>

            <input type="email" placeholder='email@email.com' className=' mt-3 mb-3 min-w-full h-6 text-center rounded-3xl' />

            <div className='flex flex-row justify-center'>
            <a href='/login' className='border-2 m-4 p-1 rounded-md hover:bg-lime-200 hover:text-black'>Back</a>
            <Btn text={"Send"} />
            </div>
        </div>
    
)
}

export default ForgotPassForm