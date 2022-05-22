import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ProfileMainLayout from './pages/ProfileMainLayout';
import ProfilePostIGTVPage from './pages/ProfilePostIGTVPage';
import ProfilePostPage from './pages/ProfilePostPage';
import ProfileTaggedPage from './pages/ProfileTaggedPage';

const Profile = ({ state }) => {
   let profileLocation = useLocation();

   return (
      <>
         <Routes location={state?.backgroundLocation || profileLocation}>
            <Route element={<ProfileMainLayout />}>
               <Route path=':email/posts' element={<ProfilePostPage />} />
               <Route path=':email/igtv' element={<ProfilePostIGTVPage />} />
               <Route path=':email/tagged' element={<ProfileTaggedPage />} />
            </Route>
         </Routes>
      </>
   );
};

export default Profile;
