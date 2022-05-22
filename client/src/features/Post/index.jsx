import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostCreatePage from './pages/PostCreatePage';
import PostDetailPage from './pages/PostDetailPage';

const Post = () => {
   return (
      <Routes>
         <Route path='create' element={<PostCreatePage />} />
         <Route path=':postId' element={<PostDetailPage />} />
      </Routes>
   );
};

export default Post;
