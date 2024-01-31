import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from '../Utils/Loader'

const ConfirmUserSuccess =  () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    const confirmUser = () => {
    
            const urlParams = new URLSearchParams(window.location.search);
            const token = urlParams.get('token');
            const email = urlParams.get('email');
        
            axios.put(`http://localhost:8080/api/users/confirm-user/${email}/${token}`, {confirmUser: true},
                {
                    headers:{
                    Authorization: `Bearer ${token}`
                }
            }
            )
            .then(res =>window.location.href = 'http://localhost:5173/login')
            .catch(err => {
                setLoading(false);
                //alert('Error: Token invalid. Please enter your email address and password again')
                console.log(err);
            });
        
            
            
        }
        const confirm = confirmUser();
        return () => {
            
            }
        }, [])
        


    return (
        <div id='div' className='flex flex-col min-h-screen justify-center bg-dark'>
            {loading  ? <Loader /> : <h2 className='mx-auto mt-4 text-3xl text-white text-center font-semibold font-style: italic font'> Token expired. Please register agian</h2>}
        </div>
    )
}



export default ConfirmUserSuccess