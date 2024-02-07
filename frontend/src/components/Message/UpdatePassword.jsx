import React from 'react'

const UpdatePassword = () => {
    return (
        <div className='flex flex-col min-h-screen justify-center bg-dark'>
            
            <h5 className='mx-auto mt-4 text-3xl text-light text-center font-semibold font-style: italic font'>Thank you! Your password is updated</h5>
            
            <div className='flex justify-center mt-6'>
            <a href="/" className='p-2 hover:underline mb-3 font- text-white'>Home</a>
            <a href="/login" className='p-2 hover:underline mb-3 text-white'>Login</a>
            </div>
        </div>
    )
}

export default UpdatePassword
