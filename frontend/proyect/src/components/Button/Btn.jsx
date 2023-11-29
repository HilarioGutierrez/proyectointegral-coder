import React from 'react'

const Btn = ({handle, text}) => {
    return (
        <>
            <button className='border-2 m-4 p-1 rounded-md hover:bg-lime-200 hover:text-black' onClick={handle}>{text}</button>

        </>
    )
}

export default Btn