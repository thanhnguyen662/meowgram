import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Auth from '../features/Auth';
import ExplorerPage from '../features/Explorer/pages/ExplorerPage';
import HomePage from '../features/Home/pages/HomePage';
import Post from '../features/Post';
import Profile from '../features/Profile';
import Loader from '../global/layouts/Loader';
import Private from '../global/layouts/Private';
import PostModalPage from '../features/Post/pages/PostModalPage';

const Routers = () => {
   let location = useLocation();
   let state = location.state;

   return (
      <Loader>
         <Routes location={state?.backgroundLocation || location}>
            <Route path='auth/*' element={<Auth />} />
            <Route path='/' element={<Private />}>
               <Route index element={<HomePage />} />
               <Route path='post/*' element={<Post />} />
               <Route path='profile/*' element={<Profile state={state} />} />
               <Route path='explorer' element={<ExplorerPage />} />
            </Route>
         </Routes>

         {state?.backgroundLocation && (
            <Routes>
               <Route path='/post/:id' element={<PostModalPage />} />
            </Routes>
         )}
      </Loader>
   );
};

export default Routers;
