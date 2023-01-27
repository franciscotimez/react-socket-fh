import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import { SocketProvider } from './context/SocketContext';
import { AppRouter } from './router/AppRouter';

export const ChatApp = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SocketProvider>
          <AppRouter />
        </SocketProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};
