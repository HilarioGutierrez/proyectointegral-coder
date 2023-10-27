import React from 'react'

const LoginForm = () => {
    return (
        <>
            <form action="" className='flex container mx-auto flex-col justify-center'>
                <div className='m-4 w-auto flex items-center justify-center flex-col'>
                    <label htmlFor="" className='p-2 m-4'>Email</label>
                    <input className=' flex rounded-md w-28 max-w-xl' type="email" />
                </div>

                <div className='m-4 w-auto flex items-center justify-center flex-col'>
                    <label htmlFor=""className='p-2 m-4'>Password</label>
                    <input type="password" className='flex rounded-md' />
                </div>
                <div className='m-4 w-auto flex items-center justify-center'>
                <button className='p-2 m-4 rounded-md w-1/4 bg-blue-500 hover:bg-blue-900 transition-colors border-2'>send</button>
                </div>

                <div className=' w-auto flex items-center justify-center'>
                    <a href="https://google.com" target='_blank' className='p-5 hover:underline'>Forgot password</a>
                    <a href="https://google.com" className='p-5 hover:underline'>Register</a>
                </div>
            </form>
        </>
    )
}

export default LoginForm
