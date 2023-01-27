import React from 'react';
import { IncomingMessage } from './IncomingMessage';
import { OutgoingMessage } from './OutgoingMessage';
import { SendMessage } from './SendMessage';

export const Messages = () => {
  return (
    <div className="mesgs">

      <div className="msg_history">

        <IncomingMessage />

        <OutgoingMessage />

      </div>

      <SendMessage />

    </div>
  );
};
