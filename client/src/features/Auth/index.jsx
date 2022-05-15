import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const Auth = () => {
   return (
      <Routes>
         <Route path='/login' element={<LoginPage />} />
         <Route path='/register' element={<RegisterPage />} />
      </Routes>
   );
};

export default Auth;
