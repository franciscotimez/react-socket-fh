import { createContext, useCallback, useState } from "react";
import { fetchSinToken } from "../helpers/fetch";

export const AuthContext = createContext();

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null,
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const login = async (email, password) => {
    const resp = await fetchSinToken("/login", { email, password }, "POST");
    console.log({ resp });

    if (resp.ok) {
      localStorage.setItem("token", resp.token);

      const { user } = resp;
      setAuth({
        uid: user.uid,
        name: user.nombre,
        email: user.email,
        checking: false,
        logged: true,
      });

      console.log("Autenticado!")
    }

    return resp.ok;
  };

  const register = (nombre, email, password) => {};

  const verificaToken = useCallback(() => {}, []);

  const logout = () => {};

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        register,
        verificaToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
