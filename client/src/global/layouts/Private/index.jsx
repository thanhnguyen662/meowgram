import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useUserLogged from '../../../hooks/useUserLogged';

function Private({ children }) {
   let location = useLocation();
   const userLogged = useUserLogged();

   if (!userLogged) {
      return <Navigate to='/auth/login' state={{ from: location }} replace />;
   }

   return (
      <>
         <Outlet />
      </>
   );
}

export default Private;
