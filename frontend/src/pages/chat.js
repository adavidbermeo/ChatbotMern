import React from "react";
import {useNavigate} from "react-router-dom"
import ChatBot  from "../components/chatbot";

const Chat = () => {
    const navigate = useNavigate()

    return(
        <div>
            <h1> CHAT BOT</h1>
            <button onClick={() => navigate("/")}> Volver al inicio</button>
            <ChatBot/>
        </div>
    )
}

export default Chat;