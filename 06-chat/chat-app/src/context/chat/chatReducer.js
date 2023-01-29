import { chatTypes } from "../../types/chatTypes";

export const chatReducer = (state, action) => {
  switch (action.type) {
    case chatTypes.usuariosCargados:
      return {
        ...state,
        usuarios: [...action.payload],
      };

    default:
      return state;
  }
};
