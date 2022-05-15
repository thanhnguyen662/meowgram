import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from '../features/Auth';
import Home from '../features/Home';

const Routers = () => {
   return (
      <Routes>
         <Route path='/auth/*' element={<Auth />} />
         <Route path='/*' element={<Home />} />
      </Routes>
   );
};

export default Routers;
