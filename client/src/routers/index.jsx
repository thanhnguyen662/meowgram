import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from '../features/Auth';

const Routers = () => {
   return (
      <Routes>
         <Route path='/auth/*' element={<Auth />} />
      </Routes>
   );
};

export default Routers;
