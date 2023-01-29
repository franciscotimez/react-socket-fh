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

    default:
      return state;
  }
};
