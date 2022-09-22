import { React, useState } from "react";
import Answers from "./Answers";

const QuestionRender = ({ isLoading, questions, incrementScore }) => {
  let [currentIndex, setCurrentIndex] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);

  const clicker = (answerIsCorrect) => {
    setCurrentIndex(++currentIndex);

    if (currentIndex + 1 > questions.length) {
      setQuizEnded(true);
    }

    if (answerIsCorrect) {
      incrementScore();
    }
  };

  return isLoading || quizEnded ? (
    <div>
      {quizEnded ? <h1>Quiz has finished!</h1> : <h1>Loading content...</h1>}
    </div>
  ) : (
    <section className="">
      <h2>{questions[currentIndex].question}</h2>
      <Answers
        answers={questions[currentIndex].answers}
        correctAnswer={questions[currentIndex].correct_answer}
        onAnswerClick={clicker}
      />
    </section>
  );
};

export default QuestionRender;
