import React, { useContext, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';

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
          : <Route path="/auth/*" element={<AuthRouter />} />
      }
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
