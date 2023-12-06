import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        try {
            e.preventDefault()
            const response = await axios.post('http://localhost:8080/api/sessions/login', { email, password });
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

            if (response.statusCode !== 200) {
                console.log('Inicio de sesión exitoso:', response.data);
            } else {
                console.error('Error al iniciar sesión:', response.data);
            }
            // Configuración de Axios para incluir el token en las cabeceras

        } catch (error) {
            console.error('Ha surgido un error', error.message);
        }
    }

    //¿PORQUE CUANDO HAGO UN SINGUP DESPUES ME DA ERROR EN EL TOCKEN CUANDO QUIERO HACER EL LOGIN DE ESE USUARIO NUEVO SI EL USUARIO SE CREO CORRECTAMENTE EN LA DB?

    return (
        <>
            <div className='flex flex-col min-h-screen min-w-full bg-dark'>

                <form action="" className=' w-3/5 mt-6 items-center self-center' >
                    <h2 className='mx-auto mt-4 text-3xl text-white text-center font-semibold font-style: italic font'>Login User</h2>
                    <div className='w-auto flex items-center justify-center flex-col'>
                        <label htmlFor="" className='mt-3 font-light text-white'>Email</label>
                        <input className=' flex rounded-3xl w-1/2 max-w-xl p-1 text-black shadow-md bg-lime-100 border-y-2 border-black' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className='w-auto flex items-center flex-col justify-content: center'>
                        <label htmlFor="" className='font-light mt-3 text-withe'>Password</label>
                        <input type="password" className='flex w-1/2 text-black p-1 rounded-3xl shadow-md bg-lime-100 border-y-2 border-black' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='m-4 w-auto flex items-center justify-center'>
                        <button className='p-1 w-2/4 rounded-2xl min-w-fit bg-lime-500 hover:bg-lime-950 transition-colors font-bold border-2 shadow-xl text-black hover:text-white' onClick={handleLogin}>Login</button>
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
