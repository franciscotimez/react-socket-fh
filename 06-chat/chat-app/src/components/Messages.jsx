import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';
import { IncomingMessage } from './IncomingMessage';
import { OutgoingMessage } from './OutgoingMessage';
import { SendMessage } from './SendMessage';

export const Messages = () => {

  const { chatState } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);


  return (
    <div className="mesgs">

      <div className="msg_history">

        {
          chatState.mensajes.map(msg => (
            (msg.to === auth.uid)
              ? <IncomingMessage key={msg.uid} msg={msg} />
              : <OutgoingMessage key={msg.uid} msg={msg} />
          ))
        }

      </div>

      <SendMessage />

    </div>
  );
};
