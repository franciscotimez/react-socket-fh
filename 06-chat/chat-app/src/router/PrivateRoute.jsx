import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ChatPage } from '../pages/ChatPage';

export const PrivateRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ChatPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
