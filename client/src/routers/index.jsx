import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Auth from '../features/Auth';
import ExplorerPage from '../features/Explorer/pages/ExplorerPage';
import HomePage from '../features/Home/pages/HomePage';
import Post from '../features/Post';
import Profile from '../features/Profile';
import Loader from '../global/layouts/Loader';
import Private from '../global/layouts/Private';
import PostDetailModal from '../features/Post/components/PostDetailModal';
import Main from '../global/layouts/Main';
import WithSidebar from '../global/layouts/WithSidebar';

const Routers = () => {
   let location = useLocation();
   let state = location.state;

   return (
      <Loader>
         <Routes location={state?.backgroundLocation || location}>
            <Route path='auth/*' element={<Auth />} />
            {/*This is Private routes. Requires Login to view */}
            <Route element={<Private />}>
               {/*This is Main layout. With header and footer */}
               <Route element={<Main />}>
                  {/*This is Sidebar layout. Add Sidebar */}
                  <Route element={<WithSidebar />}>
                     <Route path='/' element={<HomePage />} />
                     <Route
                        path='profile/*'
                        element={<Profile state={state} />}
                     />
                     <Route path='explorer' element={<ExplorerPage />} />
                  </Route>

                  <Route path='post/*' element={<Post />} />
               </Route>
            </Route>
         </Routes>

         {state?.backgroundLocation && (
            <Routes>
               <Route path='/post/:id' element={<PostDetailModal />} />
            </Routes>
         )}
      </Loader>
   );
};

export default Routers;
