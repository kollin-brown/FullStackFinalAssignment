
import React, { useState } from 'react';

const MagicEightBall = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const generateResponse = () => {
    const responses = ['Yes', 'No'];
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  };

  const handleInputChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleAsk = () => {
    if (question.trim() === '') {
      setResponse('Please ask a question.');
    } else {
      setResponse(generateResponse());
    }
  };

  return (
    <div>
    <h1>Home</h1>
      <h2>Magic Eight Ball</h2>
      <label>
        Ask me a question:
        <input type="text" value={question} onChange={handleInputChange} />
      </label>
      <button onClick={handleAsk}>Ask</button>
      <p>{response}</p>
      <div>
      <footer> Kollin Brown</footer>
      </div>
    </div>
  );
};

export default MagicEightBall;
