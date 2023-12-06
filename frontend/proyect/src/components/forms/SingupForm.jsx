import React, { useState } from 'react'
import axios from 'axios';
import Btn from '../Button/Btn';

const SingupForm = () => {

    const HandleSingup = async(e) => {
        try {
            e.preventDefault();
            const response = await axios.post('http://localhost:8080/api/sessions/singup', {firstName, lastName, email,  password, confirmPassword})
            console.log(response.data);
        } catch (error) {
            throw new Error(error);
        }
    }

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return (
        <div className=''>
            <h3 className='mx-auto mt-4 text-3xl text-light text-center font-semibold font-style: italic font'>Singup</h3>
            <form action="" className=' mx-auto mt-3 container flex flex-wrap flex-col items-center'>

                <label className='mt-4 text-dark'  htmlFor="firstName">Firt Name</label>
                <input value={firstName} className='rounded-3xl w-1/4 text-black p-1  bg-lime-200' type="text" onChange={e=>{setFirstName(e.target.value)}} />

                <label className='mt-4 text-dark'  htmlFor="lasteName"> Last Name</label>
                <input value={lastName} className='rounded-3xl w-1/4 text-black p-1  bg-lime-200' type="text" onChange={e=>{setLastName(e.target.value)}}/>

                <label className='mt-4 text-dark'  htmlFor="email">Email</label>
                <input value={email} className='rounded-3xl w-1/4 text-black p-1  bg-lime-200' type="email" onChange={e=>{setEmail(e.target.value)}} />

                <label className='mt-4 text-dark'  htmlFor="password">Password</label>
                <input value={password} className='rounded-3xl w-1/4 text-black p-1  bg-lime-200' type="password" onChange={e=>{setPassword(e.target.value)}} />

                <label className='mt-4 text-dark'  htmlFor="confirmPasword">Confirm Password</label>
                <input value={confirmPassword} className='rounded-3xl w-1/4 text-black p-1  bg-lime-200' type="password" onChange={e=>{setConfirmPassword(e.target.value)}}/>
                <div>
                <a href='/login' className='border-2 m-4 p-1 rounded-md hover:bg-lime-200 hover:text-black'>Back</a>
                <Btn handle={HandleSingup} text={"Send"}/>
                </div>
            </form>
        </div>
    )
}

export default SingupForm
