import React from 'react'

const AuthForm = () => {
    return (
        <>
        <div className='flex flex-col items-center min-h-screen justify-around'>
            <h1 className='font-sans text-6xl font-thin font-style: italic h-auto'>Welcome</h1>
            <div className='flex flex-row w-3/4 h-auto items-baseline justify-center'>
                <a href="/login" className='text-center border-b-2 m-1 p-1 w-1/3 font-semibold text-white  border-lime-500  hover:text-black hover:rounded-3xl hover:bg-lime-500 hover:border-white hover:border-2 transition-colors rounded-xl'>Log In</a>
                <a href="/singup" className='text-center border-b-2 m-1 p-1 w-2/6 font-semibold text-white border-lime-500  hover:text-black hover:rounded-3xl hover:bg-lime-500 hover:border-white hover:border-2 transition-colors rounded-xl'>Sing Up</a>
            </div>
        </div>
        </>
    )
}

export default AuthForm

