import React from "react";
import Answer from "./Answer";

const Answers = ({ answers, correctAnswer, onAnswerClick }) => {
  const answerClicked = (clickedAnswer) => (event) => {
    let correctAnswerSelected = clickedAnswer === correctAnswer;
    onAnswerClick(correctAnswerSelected);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {answers.map((answer, id) => (
        <Answer key={id} answer={answer} answerClicked={answerClicked} />
      ))}
    </div>
  );
};

export default Answers;
