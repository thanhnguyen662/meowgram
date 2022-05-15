import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from '../features/Auth';
import Home from '../features/Home';
import Loader from '../layouts/Loader';
import Main from '../layouts/Main';

const Routers = () => {
   return (
      // <Routes>
      //    <Route path='/auth/*' element={<Auth />} />
      //    <Route path='/*' element={<Home />} />
      // </Routes>
      <Loader>
         <Routes>
            <Route path='/auth/*' element={<Auth />} />
            <Route element={<Main />}>
               <Route path='/home/*' element={<Home />} />
            </Route>
         </Routes>
      </Loader>
   );
};

export default Routers;
