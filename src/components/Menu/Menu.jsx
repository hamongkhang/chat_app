import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Menu = () => {
  return (
    <Box className="menu">
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={8} md={12} className="menu_item1">
          <div
            style={{
              paddingTop: 16,
              paddingRight: 28,
              paddingBottom: 16,
              paddingLeft: 28,
              backgroundColor: "#1F1F1F",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div class="image-container">
              <img
                onClick={() => window.location.reload()}
                src={process.env.REACT_APP_IMAGE + "/images/icon_main.png"}
                alt="Ảnh"
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={4} sm={8} md={12} className="menu_item2">
          <div
            style={{
              paddingTop: 16,
              paddingRight: 28,
              paddingBottom: 16,
              paddingLeft: 28,
              backgroundColor: "#383838",
              height: 76,
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={
                process.env.REACT_APP_IMAGE + "/images/chatgpt-icon-logo.png"
              }
              alt="Ảnh"
              style={{
                width: "44px",
                height: "44px",
              }}
            />
            <Typography sx={{ marginLeft: 1, fontSize: "12px" }}>
              ChatGPT
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Menu;
