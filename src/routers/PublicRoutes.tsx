import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

// interface PropsRoutes {
//    children: JSX.Element | JSX.Element[];
//  }

export const PublicRoutes = ({children}:any) => {
   const {AuthState} = useContext(AuthContext);



//    return <><h3>hola</h3>
//     {children}
//    </>
return AuthState.uid ? <Navigate to={'/'}/> : {...children}
}
