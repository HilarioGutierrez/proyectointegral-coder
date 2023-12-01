import React from 'react'

const Home = () => {
    return (
        <div className='flex flex-col items-center min-h-screen justify-around'>
            <h1 className='font-sans text-6xl font-thin font-style: italic'>Welcome</h1>
            <div className='flex flex-col w-3/4 items-center justify-center'>
            <a href="/login" className=' m-2 p-1 w-2/4 rounded-2xl min-w-fit text-center bg-lime-500 hover:bg-lime-950 transition-colors font-bold border-2 shadow-xl text-black hover:text-white'>Login</a>
            <a href="/singup" className='m-2 p-1 w-2/4 rounded-2xl min-w-fit text-center bg-lime-500 hover:bg-lime-950 transition-colors font-bold border-2 shadow-xl text-black hover:text-white'>Singup</a>
            </div>

        </div>
    )
}

export default Home

