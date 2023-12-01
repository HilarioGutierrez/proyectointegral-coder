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
            <form action="" className=' mx-auto mt-3 w-2/6 container flex flex-wrap flex-col items-center'>

                <label className='mt-4 text-dark text-center'  htmlFor="firstName">Firt Name</label>
                <input value={firstName} className='rounded-3xl capitalize w-3/4 text-black p-1  bg-lime-100' type="text" onChange={e=>{setFirstName(e.target.value)}} />

                <label className='mt-4 text-dark text-center'  htmlFor="lasteName"> Last Name</label>
                <input value={lastName} className='rounded-3xl capitalize w-3/4 text-black p-1  bg-lime-100' type="text" onChange={e=>{setLastName(e.target.value)}}/>

                <label className='mt-4 text-dark text-center'  htmlFor="email">Email</label>
                <input value={email} className='rounded-3xl  w-3/4 text-black p-1  bg-lime-100' type="email" onChange={e=>{setEmail(e.target.value)}} />

                <label className='mt-4 text-center text-dark'  htmlFor="password">Password</label>
                <input value={password} className='rounded-3xl  w-3/4 text-black p-1  bg-lime-100' type="password" onChange={e=>{setPassword(e.target.value)}} />

                <label className='mt-4 text-center text-dark'  htmlFor="confirmPasword">Confirm Password</label>
                <input value={confirmPassword} className='rounded-3xl  w-3/4 text-black p-1 mb-4  bg-lime-100' type="password" onChange={e=>{setConfirmPassword(e.target.value)}}/>
                <Btn handle={HandleSingup} text={"Send"}/>
                <a href='/' className='p-2 hover:underline mb-3 font- text-white'>Back</a>
            </form>
        </div>
    )
}

export default SingupForm
