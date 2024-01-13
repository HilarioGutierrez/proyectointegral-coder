import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import LoginForm from '../forms/LoginForm.jsx';
import ForgotPassForm from '../forms/ForgotPassForm.jsx';
import ChangePassForm from '../Forms/changePassForm.jsx';
import Home from '../Home/Home.jsx';
import SingupSuccess from '../SingupSuccess/SingupSuccess.jsx';
import SingupForm from '../Forms/SingupForm.jsx';

const Rutas = () => {
    return (

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/singup" element={<SingupForm />} />
                <Route path='/forgotPassword' element={<ForgotPassForm />} />
                <Route path='/change-password' element={<ChangePassForm />} />
                <Route path='/SingupSuccess' element={<SingupSuccess />} />

            </Routes>
    );
};

export default Rutas;


{/* ruta a login
    ruta a register
    ruta a forgot
    ruta a home */}