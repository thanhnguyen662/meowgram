import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import ProfilePostIGTVPage from './pages/ProfilePostIGTVPage';
import ProfilePostPage from './pages/ProfilePostPage';
import ProfileTaggedPage from './pages/ProfileTaggedPage';

const Profile = () => {
   return (
      <>
         <Routes>
            <Route element={<ProfilePage />}>
               <Route path='/:email/posts' element={<ProfilePostPage />} />
               <Route path='/:email/igtv' element={<ProfilePostIGTVPage />} />
               <Route path='/:email/tagged' element={<ProfileTaggedPage />} />
            </Route>
         </Routes>
      </>
   );
};

export default Profile;
