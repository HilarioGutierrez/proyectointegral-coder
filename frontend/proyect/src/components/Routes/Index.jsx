import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import LoginForm from '../forms/LoginForm.jsx';
import Home from '../home/home.jsx';
import ForgotPassForm from '../forms/ForgotPassForm.jsx';
import SingupForm from '../forms/SingupForm.jsx';

const Rutas = () => {
    return (

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/singup" element={<SingupForm />} />
                <Route path='/forgotPassword' element={<ForgotPassForm />} />
            </Routes>
    );
};

export default Rutas;


{/* ruta a login
    ruta a register
    ruta a forgot
    ruta a home */}