import React, { useRef, useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Menu from "../Menu/Menu";
import ChatContent from "../ChatContent/ChatContent";

function ChatApp() {
  const [showMenu, setShowMenu] = useState(false);
  const chatContainerRef2 = useRef(null);

  useEffect(() => {
    if (chatContainerRef2.current) {
      chatContainerRef2.current.scrollTop =
        chatContainerRef2.current.scrollHeight;
    }
  });
  var checkMenu = false;
  const handleShowMenu = () => {
    checkMenu = true;
    setShowMenu(!showMenu);
  };
  const handleMainShowMenu = () => {
    if (checkMenu) {
      return;
    }
    setShowMenu(false);
  };

  return (
    <Grid
      container
      columns={{ xs: 4, sm: 8, md: 12 }}
      className="app_container"
      onClick={() => handleMainShowMenu()}
    >
      <Grid item xs={4} sm={8} md={2} className="left_app">
        <Menu />
      </Grid>
      <Grid item xs={4} sm={8} md={10} className="right_app">
        <ChatContent showMenu={showMenu} setShowMenu={handleShowMenu} />
      </Grid>
    </Grid>
  );
}

export default ChatApp;
