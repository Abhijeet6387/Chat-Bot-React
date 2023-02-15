import React from "react";
import { Box } from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import CommentIcon from "@mui/icons-material/Comment";

function ChatMessage(props) {
  return (
    <Box sx={{ display: "flex", justifyContent: props.user ? "end" : "start" }}>
      {props.user ? (
        <div className="message-right">
          <PersonIcon sx={{ fontSize: 18 }} /> {props.message}
        </div>
      ) : (
        <div className="message-left">
          <CommentIcon sx={{ fontSize: 18 }} /> {props.message}
        </div>
      )}
    </Box>
  );
}

export default ChatMessage;
