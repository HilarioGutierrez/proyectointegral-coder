import axios from 'axios'
import React, { useState } from 'react'
import Btn from '../Button/Btn';

const Home = () => {

    const getStorage = sessionStorage.getItem('User');
    const json = JSON.parse(getStorage);
    const email = json.data.email

    const logout = () => {
        const res = axios.post('http://localhost:8080/api/sessions/logout', {email})
        if(!res) {
            alert('Error')
        }
        window.location.href = '/'
        sessionStorage.removeItem('User')
    } 

    return (
        <div className='flex flex-col items-center min-h-screen justify-around'>
            <h1 className='font-sans text-6xl font-thin font-style: italic'>Welcome {json.data.firstName}</h1>
            <div>
                <h3 className=' mb-3 text-2xl font-style: underline'>Profile Data:</h3>
                <ul className='m-2'>
                    <li>First Name: <b><i>{json.data.firstName}</i></b></li>
                    <li>Lasti Name: <b><i>{json.data.lastName}</i></b></li>
                    <li value='email'>Email: <b><i>{json.data.email}</i></b></li>
                </ul>
            </div>
                <Btn text={'Logout'} handle={logout} />
        </div>
    )
}

export default Home

