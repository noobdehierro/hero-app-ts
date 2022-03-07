import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardRoutes } from "./DashboardRoutes";

import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { DashBoardPublicRoutes } from "./DashBoardPublicRoutes";

export const AppRouter = () => {
  const {startChecking,AuthState} = useContext(AuthContext);

  useEffect(() => {
      startChecking()

    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if ( AuthState.checking ) {
    return (<h5>Espere...</h5>);
}
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login/*"
          element={
            <PublicRoutes>
              <DashBoardPublicRoutes/>
            </PublicRoutes>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
