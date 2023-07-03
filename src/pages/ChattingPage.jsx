import React, { useEffect, useState } from "react";
import ChatBlock from "../components/ChatBlock";
import logoImage from "../assets/logo.png";
import sendIcon from "../assets/sendicon.png";
import "../styles/ChattingPage.css";
import axios from "axios";
import ChatBlock1 from "../components/ChatBlock1";
import soundicon from "../assets/soundIcon.png";
import PlaySound from "../components/PlaySound";

const styles = {
  chatBar: {
    width: "100%",
    display: "flex",
    bottom: 0,
    position: "absolute",
    justifyContent: "center",
    marginBottom: "20px",
  },

  chat: {
    width: "100%",
    display: "flex",
    bottom: 0,
    position: "absolute",
    //marginTop: "250px"
    marginLeft: "150px",
    marginBottom: "120px",
  },
  chat1: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    bottom: 0,
    position: "absolute",
    marginBottom: "250px",
  },
  in: {
    width: 1200,
    height: 70,
    borderRadius: "20px",
    fontSize: "30px",
    paddingLeft: "40px",
    border: "none",
    boxShadow: "0 1px 4px 1px rgba(0, 0, 0, 0.2)",
  },
  btn_style: {
    display: "inline-block",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
    textDecoration: "none",
    color: "grey",
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "20px",
    cursor: "pointer",
    transition: "backgroundColor 0.3s",
    height: 70,
    width: 100,
    marginLeft: "5px",
  },
  frame: {
    width: "100%",
  },
};
function ChattingPage() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [serverUrl, setserverUrl] = useState("");
  const [responseMessages, setResponseMessages] = useState([]);
  const [sendid, setSendId] = useState(0);
  const [resid, setResId] = useState(-1);
  const [firstMessage, SetFirstMessage] = useState("");
  const [option, setOption] = useState(0);

  function handleMessageSend() {
    axios({
      method: "post",
      url: serverUrl,
      data: {
        feedback: inputValue,
      },
    }).then((res) => {
      console.log(res);
      console.log(res.data.result.contentRes.message);
      if (inputValue.trim() !== "") {
        const newMessage = {
          id: sendid,
          text: inputValue,
        };
        setSendId(sendid + 1);
        setMessages([...messages, newMessage]);
        //console.log(messages);
        const responseMessage = {
          id: resid,
          text: res.data.result.contentRes.message,
        };
        setResId(resid + 1);
        setResponseMessages([...responseMessages, responseMessage]);
      }
      console.log(messages);
      console.log(responseMessages);
    });
  }

  useEffect(() => {
    axios({
      method: "post",
      url: "http://52.78.225.62:9090/api/chat",
      data: {
        level: "10",
        age: "teenager",
        place: "카페에서",
        situation: "친구와 영화, TV 드라마를 주제로 이야기를 나눠보기",
        yourRole: "친구",
        myRole: "나",
        userId: 1,
      },
    }).then((res) => {
      setserverUrl(`http://52.78.225.62:9090/api/chat/${res.data.result.id}`);
      SetFirstMessage(res.data.result.contentRes.message);
    });
  }, []);

  //처음 질문 보내기 서버 통신 구현부

  return (
    <>
      <img src={logoImage} alt="" className="logoimage" />
      <div style={styles.chat}>
        <div className="message-list" style={{ width: "1960px" }}>
          {messages.map((message) => (
            <div key={message.id} className="message">
              <ChatBlock text={message.text} />
            </div>
          ))}
        </div>
        <div className="message-list1" style={{ width: "1960px" }}>
          {responseMessages.map((message) => (
            <div key={message.id} className="message" width="1960px">
              <ChatBlock1 text={message.text} />{" "}
              <img
                src={soundicon}
                alt=""
                onClick={() => PlaySound(message.text)}
              ></img>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.chatBar}>
        <div>
          <input
            style={styles.in}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="chatinput"
          />

          {/* <button style={styles.btn_style} onClick={handleMessageSend}>
                    입력
                </button>                 */}
          <img
            src={sendIcon}
            alt=""
            className="sendicon"
            onClick={handleMessageSend}
          />
        </div>
      </div>

      {/* <div style={styles.chatBar}>
                <ChatInput color="white"/>
            </div> */}
    </>
  );
}

export default ChattingPage;
