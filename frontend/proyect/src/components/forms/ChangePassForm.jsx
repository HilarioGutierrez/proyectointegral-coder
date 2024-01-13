import React, { useState } from 'react'

const ChangePassForm = ({user}) => {
    
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const handleLogin = async (e) => {
        try {
            e.preventDefault()
            const response = await axios.post('http://localhost:8080/api/sessions/change-password', { email, password });
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

            if (response.statusCode !== 200) {
                window.location.href = response.data.redirectUrl
            } else {
                console.error('Error al iniciar sesión:', response.data);
            }

        } catch (error) {
            console.error('Ha surgido un error', error.message);
        }
    }

    return (
        <>
            <div className='flex flex-col min-h-screen min-w-full bg-dark'>

                <form action="" className=' w-3/5 mt-6 items-center self-center' >
                    <h2 className='mx-auto mt-4 text-3xl text-white text-center font-semibold font-style: italic font'>{user}, change your password</h2>
                    <div className='w-auto flex items-center justify-center flex-col'>
                        <Label text={'New password'} />
                        <input className=' flex rounded-3xl w-1/2 max-w-xl p-1 text-black shadow-md bg-lime-100 border-y-2 border-black' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className='w-auto flex items-center flex-col justify-content: center'>
                        <Label text={'Confirm Password'} />
                        <input type="password" className='flex w-1/2 text-black p-1 rounded-3xl shadow-md bg-lime-100 border-y-2 border-black' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <div className='m-4 w-2/4 mx-auto flex flex-row justify-center'>
                        <Btn handle={handleLogin} text={"Confirm"} />
                    </div>                    
                </form>
            </div>
        </>
    )
}

export default ChangePassForm
