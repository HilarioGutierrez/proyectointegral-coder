import React from 'react'

const LoginForm = () => {
    return (
        <>
            <div className='flex flex-col min-h-screen min-w-full bg-url bg-cover'>
                
                <form action="" className=' w-3/5 mt-6 items-center self-center' >
                <h2 className='mx-auto mt-4 text-3xl text-black text-center font-semibold font-style: italic font'>Login User</h2>
                    <div className='w-auto flex items-center justify-center flex-col'>
                        <label htmlFor="" className='mt-3 font-light text-black'>Email</label>
                        <input className=' flex rounded-md w-1/2 max-w-xl text-black shadow-md bg-lime-100 border-y-2 border-black' type="email" />
                    </div>

                    <div className='w-auto flex items-center flex-col justify-content: center'>
                        <label htmlFor="" className='font-light mt-3 text-black'>Password</label>
                        <input type="password" className='flex w-1/2 text-black rounded-md shadow-md bg-lime-100 border-y-2 border-black' />
                    </div>
                    <div className='m-4 w-auto flex items-center justify-center'>
                        <button className='p-1 w-3/4 rounded-md min-w-fit bg-lime-400 hover:bg-lime-950 transition-colors font-bold border-2 shadow-xl text-black hover:text-white'>Login</button>
                    </div>
                    <div className=' w-auto flex items-center xs:justify-evenly sm:justify-center'>
                        <a href="https://google.com" target='_blank' className='p-2 hover:underline mb-3 font- text-black'>Forgot password</a>
                        <a href="https://google.com" target='_blank' className='p-2 hover:underline mb-3 font- text-black'>Register</a>
                    </div>

                </form>
            </div>
        </>
    )
}

export default LoginForm
