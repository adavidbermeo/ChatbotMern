import React, { useState } from 'react';
import axios from 'axios';
import  {useNavigate} from 'react-router-dom';

const addQuestion = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {question, answer};

        try {
            await axios.post('http://localhost:5000/api/chats/add', data);
            alert('Question added');
            setQuestion('');
            setAnswer('');
        }
        catch (err) {
            console.log(err, 'Error adding question');
        }
    }

    return (
        <div>
            <h2>Add Question</h2>
            <button onClick={() => navigate('/')}> Back</button>
            <form onSubmit={handleSubmit}>
                <label>Question</label>
                <input type="text" required value={question} onChange={(e) => setQuestion(e.target.value)} />
                <label>Answer</label>
                <input type="text" required value={answer} onChange={(e) => setAnswer(e.target.value)} />
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default addQuestion;