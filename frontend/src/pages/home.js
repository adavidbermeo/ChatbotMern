import React from "react";
import{ useNavigate } from "react-router-dom"

const Home =() => {
    const navigate = useNavigate()

    return (
        <div>
             <h1>CHATBOT EN MERN</h1>
             <button onClick={() => navigate("/add")}>Add questions</button>
             <button onClick={() => navigate("/chat")}>Use chat</button>
        </div>
    )
}

export default Home;