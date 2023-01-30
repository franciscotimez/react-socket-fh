import { chatTypes } from "../../types/chatTypes";

export const chatReducer = (state, action) => {
  switch (action.type) {
    case chatTypes.usuariosCargados:
      return {
        ...state,
        usuarios: [...action.payload],
      };

    case chatTypes.activarChat:
      if (state.chatActivo === action.payload) return state;
      return {
        ...state,
        chatActivo: action.payload,
        mensajes: [],
      };

    case chatTypes.nuevoMensaje:
      if (
        state.chatActivo === action.payload.from ||
        state.chatActivo === action.payload.to
      ) {
        return {
          ...state,
          mensajes: [...state.mensajes, action.payload],
        };
      } else {
        return state;
      }

    case chatTypes.cargarMensajes:
      return {
        ...state,
        mensajes: action.payload,
      };

    case chatTypes.resetChat:
      return {
        uid: "",
        chatActivo: null,
        usuarios: [],
        mensajes: [],
      };
    default:
      return state;
  }
};
