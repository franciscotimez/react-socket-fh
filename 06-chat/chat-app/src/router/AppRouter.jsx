import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ChatPage } from '../pages/ChatPage';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRouter />} />
      <Route path="/" element={<ChatPage />} />
      <Route path="/*" element={<Navigate to="/" />} />

      {/* {
      (status === "auth-ok")
        ? <Route path="/*" element={<JournalRoutes />} />
        : <Route path="/auth/*" element={<AuthRoutes />} />
    }
    <Route path="/*" element={<Navigate to="/auth/login"/>} /> */}
      {/* Login y Registro */}
      {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}
      {/* JournalApp */}
      {/* <Route path="/*" element={<JournalRoutes />} /> */}
    </Routes>
  );
};
