import React from 'react'
import Btn from '../Button/Btn';

const ForgotPassForm = () => {
    return (
        <div className=' w-2/6 flex flex-col mx-auto min-h-screen items-center justify-center'>
            <h4 className='mx-auto text-2xl text-white text-center m-3 font-semibold font-style: italic font'>Your email</h4>
            <input type="email" placeholder='email@email.com' className=' mt-3 mb-3 min-w-full h-6 bg-lime-100 text-red text-center rounded-3xl' />
            <Btn text={"Send"} />
            <a href='/login' className='p-2 hover:underline text-white'>Back</a>
        </div>


    )
}

export default ForgotPassForm