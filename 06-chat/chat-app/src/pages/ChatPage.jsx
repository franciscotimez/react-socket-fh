import React from 'react';
import { InboxPeople } from '../components/InboxPeople';
import { Messages } from '../components/Messages';

import '../css/chat.css';

export const ChatPage = () => {
  return (
    <div className="messaging">
      <div className="inbox_msg">

        <InboxPeople />


        {/* <!-- Chat inicio --> */}
        <Messages />
        {/* <!-- Chat Fin --> */}

      </div>


    </div>
  );
};
