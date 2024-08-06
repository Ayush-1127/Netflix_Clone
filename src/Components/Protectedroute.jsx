import React from 'react'
import { UserAuth } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom';

const Protectedroute = ({children}) => {

    const { user } = UserAuth();

    if(!user){
        return <Navigate to="/" />
    }
  return children;
  
}

export default Protectedroute