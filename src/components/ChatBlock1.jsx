import React from "react";
import chatblock from "../assets/chatblock11.png";

const styles = {
  ics: {
    position: "relative",
    right: 0,
    marginTop: "100px",
  },
  to: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#DCE4F5",
    padding: "10px",
    color: "#4E5560",
    fontSize: "30px",
  },
  text: {
    margin: 0,
    width: "600px",
    height: "40px",
  },
};
function ChatBlock1(props) {
  return (
    <div style={styles.ics}>
      <img
        src={chatblock}
        alt={props.altText}
        style={{ marginLeft: "100px" }}
      />
      <div style={styles.to}>
        <p style={styles.text}>{props.text}</p>
      </div>
    </div>
  );
}

export default ChatBlock1;
