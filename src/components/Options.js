import { React, useState } from "react";

const Options = ({ onReady }) => {
  const [numQuestions, setNumQuestions] = useState(0);

  return (
    <div>
      <h1>Num selected = {numQuestions}</h1>
      <input
        type="number"
        step="10"
        min="10"
        name="questionAmount"
        placeholder="Number of questions"
        onChange={(e) => setNumQuestions(e.target.value)}
      />

      <button onClick={onReady(numQuestions)}>Start Quiz</button>
    </div>
  );
};

export default Options;
