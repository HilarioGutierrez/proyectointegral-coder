import React from 'react'

const Btn = ({handle, text}) => {
    return (
        <>
            <button className='p-1 w-2/4 rounded-2xl min-w-fit bg-lime-500 hover:bg-lime-950 transition-colors font-bold border-2 shadow-xl text-black hover:text-white' onClick={handle}>{text}</button>

        </>
    )
}

export default Btn