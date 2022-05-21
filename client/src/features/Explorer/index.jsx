import React from 'react';
import ExplorerPage from './pages/ExplorerPage';

const Explorer = () => {
   return (
      <Routes>
         <Route path='/' element={<ExplorerPage />} />
      </Routes>
   );
};

export default Explorer;
