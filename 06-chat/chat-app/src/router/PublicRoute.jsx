import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';

export const PublicRoute = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRouter />} />
    </Routes>
  );
};
