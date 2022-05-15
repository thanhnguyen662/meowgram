import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from '../features/Auth';
import Home from '../features/Home';
import Loader from '../layouts/Loader';
import Main from '../layouts/Main';
import Profile from '../features/Profile';
import Private from '../layouts/Private';
import NotFoundPage from '../global/pages/NotFoundPage';

const Routers = () => {
   return (
      <Loader>
         <Routes>
            <Route path='/auth/*' element={<Auth />} />
            <Route element={<Main />}>
               <Route path='/home/*' element={<Home />} />
            </Route>
            <Route element={<Private />}>
               <Route path='/profile/*' element={<Profile />} />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
         </Routes>
      </Loader>
   );
};

export default Routers;
