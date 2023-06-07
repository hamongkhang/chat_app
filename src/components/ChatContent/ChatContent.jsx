import React, { useState, useEffect, useRef } from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const ChatContent = () => {
  const chatContainerRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [listMessage, setListMessage] = useState([]);
  const [suggest, setSuggest] = useState();
  const [isDropdown, setIsDropdown] = useState(false);
  const [isError, setIsError] = useState(false);
  return (
    <Box className="content_container">
      <Box className="content_container_top">
        {listMessage.length ? null : (
          <Box className="background_image">
            <img
              src="https://hamongkhang.github.io/CHATGPT_APP/images/content.png"
              alt="Ảnh"
            />
          </Box>
        )}
      </Box>

      <Box className="content_container_bottom">ádad</Box>
    </Box>
  );
};

export default ChatContent;
