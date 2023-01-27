import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ChatPage } from '../pages/ChatPage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
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
