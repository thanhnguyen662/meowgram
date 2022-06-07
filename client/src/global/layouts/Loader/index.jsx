import React from 'react';
import { useSelector } from 'react-redux';
import { authData } from '../../../features/Auth/authSlice';
import HomeSpinner from '../../../global/components/HomeSpinner';

const Loader = (props) => {
   const { children } = props;
   const { loading } = useSelector(authData);
   return <>{loading ? <HomeSpinner /> : <>{children}</>}</>;
};

export default Loader;
