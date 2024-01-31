import React, { useState } from 'react'
import Label from '../Label/Label';
import Btn from '../Button/Btn';
import axios from 'axios';
import Loader from '../Utils/Loader';

// tiene que tener btn para validar token y enviar a form de actualizacion. 

const ChangePassForm = () => {

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const urlParams = new URLSearchParams(window.location.search)
    const emailParams = urlParams.get('email')
    const tokenParams = urlParams.get('token')

    const changePassword = (e) => {
        try {
            e.preventDefault()
            setLoading(true);

            axios.put('http://localhost:8080/api/sessions/updatePassword', {email:emailParams, password, confirmPassword})
            .then(res =>{
                alert('Password updated successfully');
                window.location.href = 'login'
            })
            .catch(err =>{
                console.error(err.message);
                alert(err)
            })
            .finally(() => {
                setLoading(false)
            });
        
    } catch (error) {
        
    }
}
    return (
        <>
            <div className='flex flex-col min-h-screen min-w-full bg-dark'>

                <form action="" className=' w-3/5 mt-6 items-center self-center' >
                    <h2 className='mx-auto mt-4 text-3xl text-white text-center font-semibold font-style: italic font'> change your password</h2>
                    <div className='w-auto flex items-center justify-center flex-col'>
                        <Label text={'New password'} />
                        <input className=' flex rounded-3xl w-1/2 max-w-xl p-1 text-black shadow-md bg-lime-100 border-y-2 border-black' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className='w-auto flex items-center flex-col justify-content: center'>
                        <Label text={'Confirm Password'} />
                        <input className='flex w-1/2 text-black p-1 rounded-3xl shadow-md bg-lime-100 border-y-2 border-black' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <div className='m-4 w-2/4 mx-auto flex flex-row justify-center'>
                        <Btn handle={changePassword}  text={"Confirm"} />
                    </div>
                    <div className=' w-auto flex items-center xs:justify-evenly sm:justify-center'>
                        {loading && <Loader />}
                    </div>
                </form>
            </div>
            </>
            )
}

            export default ChangePassForm
