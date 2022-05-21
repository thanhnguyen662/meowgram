import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from '../features/Auth';
import ExplorerPage from '../features/Explorer/pages/ExplorerPage';
import Home from '../features/Home';
import Profile from '../features/Profile';
import Loader from '../global/layouts/Loader';
import Private from '../global/layouts/Private';

const Routers = () => {
   return (
      <Loader>
         <Routes>
            <Route path='/auth/*' element={<Auth />} />

            <Route element={<Private />}>
               <Route index path='/*' element={<Home />} />
               <Route path='/profile/*' element={<Profile />} />
               <Route path='/explorer' element={<ExplorerPage />} />
            </Route>
         </Routes>
      </Loader>
   );
};

export default Routers;
