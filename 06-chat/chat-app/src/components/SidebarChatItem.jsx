import React, { useContext } from 'react';
import { ChatContext } from '../context/chat/ChatContext';
import { chatTypes } from '../types/chatTypes';

export const SidebarChatItem = ({ usuario }) => {

  const { chatState, dispatch: dispatchChat } = useContext(ChatContext);
  const { chatActivo } = chatState;

  const onClick = () => {
    dispatchChat({
      type: chatTypes.activarChat,
      payload: usuario.uid
    });
  };

  return (
    <div
      className={`chat_list ${(chatActivo === usuario.uid) && 'active_chat'}`}
      onClick={onClick}
    >
      <div className="chat_people">
        <div className="chat_img">
          <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
        </div>
        <div className="chat_ib">
          <h5>{usuario.nombre}</h5>
          {
            usuario.online
              ? <span className="text-success">Online</span>
              : <span className="text-danger">Offline</span>
          }
        </div>
      </div>
    </div>
  );
};
