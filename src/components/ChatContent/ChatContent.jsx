import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const ChatContent = (props) => {
  const chatContainerRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [listMessage, setListMessage] = useState([]);
  const [isError, setIsError] = useState(false);

  const textareaRef = useRef(null);
  const textareaRef2 = useRef(null);
  const initialTextareaHeight = 40;
  const [checkSize, setCheckSize] = useState(40);
  const [checkSize2, setCheckSize2] = useState(40);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleEnterPress();
      event.preventDefault();
    }
  };

  const handleEnterPress = () => {
    if (!isError) {
      if (listMessage.length % 2 !== 0) {
        return;
      }
    } else {
      setIsError(false);
    }
    setMessage("");
    setListMessage([...listMessage, message]);
    setTimeout(async () => {
      await sendMessage(message);
      setLoading(false);
    }, 1000);
  };

  const sendMessage = async (message) => {
    var apiKey = "fps4J0CkOPtBSKv8Xo3iT3BlbkFJoxrL3Ouc0kvMrfLHb4nF";
    if (isLoading) {
      return;
    }
    setLoading(true);
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          messages: [
            { role: "system", content: "You are" },
            { role: "user", content: message },
          ],
          model: "gpt-3.5-turbo",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer sk-" + apiKey,
          },
        }
      );

      const newMessage = response.data.choices[0].message.content;
      setListMessage([...listMessage, message, newMessage]);
    } catch (error) {
      setIsError(true);
      setListMessage([...listMessage, message, "ChatBox...."]);
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMenuToggle = () => {
    props.setShowMenu(!props.showMenu);
  };

  const handleDelete = () => {
    setListMessage([]);
    props.setShowMenu(!props.showMenu);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (listMessage.length % 2 !== 0) {
      return;
    }
    setMessage("");
    setListMessage([...listMessage, message]);
    setTimeout(async () => {
      await sendMessage(message);
      setLoading(false);
    }, 1000);
  };

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    textarea.style.height = `${initialTextareaHeight}px`;
    textarea.style.height = `${textarea.scrollHeight}px`;
    setCheckSize(textarea.scrollHeight);

    if (textarea.scrollHeight > initialTextareaHeight * 2.5) {
      textarea.style.overflowY = "auto";
    } else {
      textarea.style.overflowY = "hidden";
    }
  };

  const adjustTextareaHeight2 = () => {
    const textarea = textareaRef2.current;
    textarea.style.height = `${initialTextareaHeight}px`;
    textarea.style.height = `${textarea.scrollHeight}px`;
    setCheckSize2(textarea.scrollHeight);

    if (textarea.scrollHeight > initialTextareaHeight * 2.5) {
      textarea.style.overflowY = "auto";
    } else {
      textarea.style.overflowY = "hidden";
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
    adjustTextareaHeight2();
  }, [message]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [checkSize]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [checkSize2]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  });

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [listMessage]);

  return (
    <Box className="content_container">
      <Box
        className="content_container_top"
        sx={{
          height:
            checkSize === 37
              ? "85%"
              : checkSize === 47
              ? "84%"
              : checkSize === 62
              ? "81%"
              : checkSize === 77
              ? "79%"
              : checkSize === 93
              ? "76%"
              : checkSize === 108
              ? "75%"
              : "75%",
        }}
      >
        {listMessage.length ? (
          <Box className="chat-container" ref={chatContainerRef}>
            {listMessage.map((message, index) => {
              return (
                <Box
                  key={index}
                  className="chat_form"
                  sx={{ background: index % 2 === 0 ? "#262626" : "#181818" }}
                >
                  {index % 2 === 0 ? (
                    <img
                      src="https://hamongkhang.github.io/CHATGPT_APP/images/you.png"
                      alt="Ảnh"
                      className="avatar"
                    />
                  ) : (
                    <img
                      src="https://hamongkhang.github.io/CHATGPT_APP/images/chatgpt-icon-logo.png"
                      alt="Ảnh"
                      className="avatar"
                    />
                  )}
                  <div className="chat_content">
                    <Typography className="chat_content_text">
                      {message}
                    </Typography>
                  </div>
                </Box>
              );
            })}
            {loading ? (
              <Box className="loading_container">
                <div className="loading_child">
                  <img
                    src="https://hamongkhang.github.io/CHATGPT_APP/images/chatgpt-icon-logo.png"
                    alt="Ảnh"
                    className="loading_avt"
                  />
                  <div className="loading-dots">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>
              </Box>
            ) : null}
          </Box>
        ) : (
          <Box className="background_image">
            <img
              src="https://hamongkhang.github.io/CHATGPT_APP/images/content.png"
              alt="Ảnh"
            />
          </Box>
        )}
      </Box>

      <Box
        className="content_container_bottom"
        sx={{
          height:
            checkSize === 37
              ? "15%"
              : checkSize === 47
              ? "16%"
              : checkSize === 62
              ? "19%"
              : checkSize === 77
              ? "21%"
              : checkSize === 93
              ? "24%"
              : checkSize === 108
              ? "25%"
              : "25%",
        }}
      >
        <div
          className="form_pc"
          style={{ width: "100%", position: "relative" }}
        >
          <textarea
            className="text_area"
            onKeyDown={handleKeyPress}
            ref={textareaRef}
            onChange={handleChangeMessage}
            value={message}
            style={{
              minHeight: `${initialTextareaHeight}px`,
              maxHeight: `${initialTextareaHeight * 2.5}px`,
            }}
          />
          <div className="form_icon">
            {message ? (
              <IconButton onClick={(e) => handleSendMessage(e)}>
                <SendIcon style={{ color: "#6D6D6D" }} />
              </IconButton>
            ) : (
              <IconButton onClick={handleMenuToggle}>
                <MoreHorizIcon style={{ color: "#6D6D6D" }} />
              </IconButton>
            )}
            {props.showMenu && (
              <div class="image-container">
                <Box className="deleteClick" onClick={handleDelete}>
                  <IconButton>
                    <DeleteIcon className="delete_icon" />
                  </IconButton>
                  <Typography className="delete_text">Delete</Typography>
                </Box>
              </div>
            )}
          </div>
        </div>
        <div
          className="form_mobile"
          style={{ width: "100%", alignItems: "center" }}
        >
          <textarea
            className="form_mobile_input"
            onKeyDown={handleKeyPress}
            ref={textareaRef2}
            onChange={handleChangeMessage}
            value={message}
            style={{
              minHeight: `${initialTextareaHeight}px`,
              maxHeight: `${initialTextareaHeight * 2.5}px`,
            }}
          />
          {message ? (
            <IconButton onClick={(e) => handleSendMessage(e)}>
              <SendIcon style={{ marginLeft: "5px", color: "#6D6D6D" }} />
            </IconButton>
          ) : (
            <IconButton onClick={handleMenuToggle}>
              <MoreHorizIcon style={{ marginLeft: "5px", color: "#6D6D6D" }} />
            </IconButton>
          )}
          {props.showMenu && (
            <div class="image-container">
              <Box className="form_mobile_icon" onClick={handleDelete}>
                <IconButton>
                  <DeleteIcon className="delete_icon" />
                </IconButton>
                <Typography className="delete_text">Delete</Typography>
              </Box>
            </div>
          )}
        </div>
        <Typography className="form_description">
          Free Research Preview. ChatGPT may product inaccurate information
          about people, place, or fact
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatContent;
