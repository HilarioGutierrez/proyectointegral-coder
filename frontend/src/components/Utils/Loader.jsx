import React from 'react'

const Loader = () => {
return (
    <div className='flex justify-center items-center h-2 m-4 w-auto'>
        <div className="lds-ellipsis" >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
)
}

export default Loader
