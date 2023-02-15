import React, { useState } from "react";
import { Box, Button, Container } from "@mui/material";
import chatbotIcon from "../assets/chatbotIcon.jpg";
import ChatMessage from "./ChatMessage";
import { analyze } from "../utils";
function ChatBot() {
  const [msg, setMsg] = useState([
    {
      message: "Hi, May I have your name ?",
    },
  ]);
  const [text, setText] = useState("");
  const onSend = () => {
    let list = [...msg, { message: text, user: true }];
    if (list.length > 2) {
      const reply = analyze(text);
      list = [...msg, { message: reply }];
    } else {
      list = [...list, { message: `Hi, ${text}` }];
    }
    setMsg(list);
    setText("");
  };
  return (
    <Container>
      <h2>Simple ChatBot</h2>
      <img src={chatbotIcon} alt="chatbot" height={200} width={200}></img>
      <Box className="chat-message">
        {msg.length > 0 && msg.map((data) => <ChatMessage {...data} />)}
        <input
          id="name"
          type="text"
          value={text}
          style={{ fontSize: 20 }}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <Button
          variant="contained"
          sx={{
            marginLeft: 2,
            marginBottom: 1,
            borderRadius: 5,
            fontSize: 14,
            textTransform: "unset",
            backgroundColor: "black",
            "&:hover": {
              backgroundColor: "lightgray",
              color: "black",
            },
          }}
          onClick={onSend}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default ChatBot;
