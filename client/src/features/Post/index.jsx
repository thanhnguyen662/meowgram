import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostDetailPage from './pages/PostDetailPage';

const Post = () => {
   return (
      <Routes>
         <Route path=':postId' element={<PostDetailPage />} />
      </Routes>
   );
};

export default Post;
