import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from '../features/Auth';
import Home from '../features/Home';
import Profile from '../features/Profile';
import Main from '../global/layouts/Main';
import Private from '../global/layouts/Private';
import NotFoundPage from '../global/pages/NotFoundPage';
import Loader from '../global/layouts/Loader';
import ExplorerPage from '../features/Explorer/pages/ExplorerPage';

const Routers = () => {
   return (
      <Loader>
         <Routes>
            <Route path='/auth/*' element={<Auth />} />
            <Route element={<Main />}></Route>
            <Route element={<Private />}>
               <Route path='/home/*' element={<Home />} />
               <Route path='/profile/*' element={<Profile />} />
               <Route path='/explorer' element={<ExplorerPage />} />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
         </Routes>
      </Loader>
   );
};

export default Routers;
