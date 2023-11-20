import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import LoginForm from '../forms/LoginForm.jsx';
import RegisterForm from '../forms/RegisterForm.jsx';
import Home from '../home/home.jsx';

const Rutas = () => {
    return (

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/singup" element={<RegisterForm />} />
            </Routes>
    );
};

export default Rutas;


{/* ruta a login
    ruta a register
    ruta a forgot
    ruta a home */}