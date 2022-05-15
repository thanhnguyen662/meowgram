import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

const Auth = () => {
   return (
      <Routes>
         <Route path='/login' element={<LoginPage />} />
      </Routes>
   );
};

export default Auth;
