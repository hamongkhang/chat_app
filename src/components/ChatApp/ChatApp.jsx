import { Grid, Box } from "@mui/material";
import Menu from "../Menu/Menu";
import ChatContent from "../ChatContent/ChatContent";
import React from "react";

function ChatApp() {
  
  return (
    <Grid container columns={{ xs: 4, sm: 8, md: 12 }} className="app_container">
    <Grid item xs={4} sm={8} md={2} className="left_app">
         Phần bên trái 
    </Grid>
    <Grid item xs={4} sm={8} md={10} className="right_app">
        Phần bên phải
    </Grid>
  </Grid>
  );
}

export default ChatApp;
