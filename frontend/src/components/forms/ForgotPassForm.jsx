import React, { useState } from 'react'
import Btn from '../Button/Btn';
import axios from 'axios';
import 'tailwindcss/tailwind.css';
import Loader from '../Utils/Loader';


const ForgotPassForm = () => {

    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    const handleClick = () => {
        try {
            setLoading(true)
            axios.post('http://localhost:8080/api/sessions/forgotPassword', { email })
                .then(res => {
                    if (res.status !== 200) {
                        alert('Email dont exist, please try again');
                    }
                    window.location.href = 'forgotpassword-sent'
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    alert('Email dont exist, please try again');
                })
        } catch (error) {
            alert('We have an error! Probably email dont exist, please try again. Sorry');
            console.log(error.message);
        }
    }

    return (
        
        <>
        <div id='divForgotPass' className=' w-2/6 flex flex-col mx-auto min-h-screen items-center justify-center'>
            <h4 className='mx-auto text-2xl text-white text-center m-3 font-semibold font-style: italic font'>Your email</h4>
            <input id='email' value={email} type="email" placeholder='email@email.com' className=' mt-3 mb-3 min-w-full h-6 bg-lime-100 text-black text-center rounded-3xl' onChange={(e) => setEmail(e.target.value)} />
            <Btn text={"Send"} handle={handleClick} />
            <a href='/login' className='p-2 hover:underline text-white'>Back</a>
            {loading && <Loader />}
        </div>
        </>


    )
}

export default ForgotPassForm