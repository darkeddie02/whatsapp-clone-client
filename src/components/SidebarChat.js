import React from "react";
import { Avatar } from "@material-ui/core";

import "./styles/SidebarChat.css";

function SidebarChat({receiver_name}) {
  return (
    <div className="sidebarChat">
      <Avatar src="./img/avatar.png" />
      <div className="sidebarChat__info">
        <h2>{receiver_name}</h2>
        <p>New messages...</p>
      </div>
    </div>
  );
}

export default SidebarChat;
