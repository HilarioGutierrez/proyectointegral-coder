import React from 'react'
import Btn from '../Button/Btn'
import axios from 'axios'

const ConfirmToken = () => {
            const urlQuery = new URLSearchParams(window.location.search);
            const token = urlQuery.get('token');
            const email = urlQuery.get('email');
            const verifyToken = () => {
                try {
                    axios.get(`http://localhost:8080/api/sessions/confirmtoken?token=${token}&email=${email}`)
                    .then(res => {
                        window.location.href = `change-password?email=${email}&token=${token}`;
            })
            .catch(err => {
                console.log(err);
                window.location.href = 'forgotPassword';
            })
        } catch (error) {
            
        }
    }
    return (
        <>
            <div className='flex flex-col min-h-screen min-w-full bg-dark justify-center'>
                <h2 className='mx-auto mt-4 text-3xl text-white text-center font-semibold font-style: italic font'> {email}, click and update password</h2>
                <div className=' w-auto mt-4 flex items-center xs:justify-evenly sm:justify-center'>
                    <Btn text={'Update Password'} handle={verifyToken} />
                </div>
            </div>
        </>
    )
}

export default ConfirmToken
