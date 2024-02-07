import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from '../Home/Home.jsx';
import SingupSuccess from '../Message/SingupSuccess.jsx';
import SingupForm from '../Forms/SingupForm.jsx';
import AuthForm from '../Forms/AuthForm.jsx';
import LoginForm from '../Forms/LoginForm.jsx';
import UpdatePassword from '../Message/UpdatePassword.jsx';
import Loader from '../Utils/Loader.jsx';
import ConfirmUserSuccess from '../Confirmations/ConfirmUserSuccess.jsx';
import ForgotPassSent from '../Message/ForgotPassSent.jsx';
import ForgotPassForm from '../Forms/ForgotPassForm.jsx';
import ChangePassForm from '../Forms/ChangePassForm.jsx';
import ConfirmToken from '../Confirmations/ConfirmToken.jsx';

const Rutas = () => {
    return (

    <Routes>
        <Route path='/' element={<AuthForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />

        <Route path="/singup" element={<SingupForm />} />
        <Route path='/SingupSuccess' element={<SingupSuccess />} />
        <Route path='/confirm-user' element={<ConfirmUserSuccess />} />

        <Route path='/forgotPassword' element={<ForgotPassForm />} />
        <Route path='/forgotpassword-sent' element={<ForgotPassSent />} />
        <Route path='/confirmtoken' element={<ConfirmToken />} /> 
        <Route path='/change-password' element={<ChangePassForm />} />
        <Route path='/update-password' element={<UpdatePassword />} />
        <Route path='/loader' element={<Loader />} />
        
    </Routes>
);
};

export default Rutas;

