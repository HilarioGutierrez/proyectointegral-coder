import React, { useState } from 'react';
import axios from 'axios';
import Btn from '../Button/Btn';
import Label from '../Label/Label';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        try {
            e.preventDefault()
            const response = await axios.post('http://localhost:8080/api/sessions/login', { email, password });
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

            if (response.statusCode !== 200) {
                window.location.href = "singup"
            } else {
                console.error('Error al iniciar sesión: ', response.data);
            }

        } catch (error) {
            alert('Login error. Please try again')
            console.error('Ha surgido un error', error.message);
        }
    }

    return (
        <>
            <div className='flex flex-col min-h-screen min-w-full bg-dark'>

                <form action="" className=' w-3/5 mt-6 items-center self-center' >
                    <h2 className='mx-auto mt-4 text-3xl text-white text-center font-semibold font-style: italic font'>Login User</h2>
                    <div className='w-auto flex items-center justify-center flex-col'>
                        <Label text={'Email'} />
                        <input className=' flex rounded-3xl w-1/2 max-w-xl p-1 text-black shadow-md bg-lime-100 border-y-2 border-black' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className='w-auto flex items-center flex-col justify-content: center'>
                        <Label text={'Password'} />
                        <input type="password" className='flex w-1/2 text-black p-1 rounded-3xl shadow-md bg-lime-100 border-y-2 border-black' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='m-4 w-2/4 mx-auto flex flex-row justify-center'>
                        <Btn handle={handleLogin} text={"Login"} />
                    </div>
                    <div className=' w-auto flex items-center xs:justify-evenly sm:justify-center'>
                        <a href="/forgotPassword" className='p-2 hover:underline mb-3 font- text-white'>Forgot password</a>
                        <a href="/singup" className='p-2 hover:underline mb-3 text-white'>Singup</a>
                    </div>

                </form>
            </div>
        </>
    )
}

export default LoginForm
