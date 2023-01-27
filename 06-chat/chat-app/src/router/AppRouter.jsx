import React, { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

  const { auth, verificaToken } = useContext(AuthContext);

  useEffect(() => {
    verificaToken();
  }, [verificaToken]);

  if (auth.checking) {
    return <h1>Espere por favor</h1>;
  }
  return (
    <Routes>
      {
        (auth.logged)
          ? <Route path="/*" element={<PrivateRoute />} />
          : <Route path="/auth/*" element={<PublicRoute />} />
      }
    </Routes>
  );
};
