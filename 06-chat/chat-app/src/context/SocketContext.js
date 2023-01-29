import React, { useContext, useEffect } from "react";
import { createContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { useSocket } from "../hooks/useSocket";
import { chatTypes } from "../types/chatTypes";
import { ChatContext } from "./chat/ChatContext";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { auth } = useContext(AuthContext);
  const { dispatch: dispatchChat } = useContext(ChatContext);

  const { socket, online, conectarSocket, desconectarSocket } = useSocket(
    "http://localhost:8080"
  );

  useEffect(() => {
    if (auth.logged) {
      conectarSocket();
    }
  }, [auth, conectarSocket]);

  useEffect(() => {
    if (!auth.logged) {
      desconectarSocket();
    }
  }, [auth, desconectarSocket]);

  // Escuchar cambios en usuarios conectados
  useEffect(() => {
    socket?.on("lista-usuarios", (usuarios) => {
      dispatchChat({
        type: chatTypes.usuariosCargados,
        payload: usuarios
      })
      console.log({ usuarios });
    });
  }, [socket, dispatchChat]);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
