import React, { useEffect, useState } from "react";
import axios from "axios";
import QuestionRender from "./QuestionRender";
import Options from "./Options";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  let [score, setScore] = useState(0);

  useEffect(() => {
    setScore(0);
  }, []);

  const incrementScore = () => {
    setScore(++score);
  };

  const parseQuestions = (questions) => {
    return questions.map((question) => {
      let allAnswers = question.incorrect_answers;

      allAnswers.push(question.correct_answer);
      question["answers"] = allAnswers.sort();

      delete question["incorrect_answers"];
      return question;
    });
  };

  const fetchQuestions = async (questionCount) => {
    const result = await axios(
      `https://opentdb.com/api.php?amount=${questionCount}`
    );
    setQuestions(parseQuestions(result.data.results));
    setIsLoading(false);
    setShowOptions(!showOptions);
  };

  const onReady = (questionCount) => (e) => {
    fetchQuestions(questionCount);
  };

  return (
    <div>
      <h1>React Quiz Game</h1>
      <button
        onClick={(e) => setShowOptions(!showOptions)}
        style={{
          visibility: showOptions || isLoading === false ? "hidden" : "visible",
        }}
      >
        Get Started
      </button>

      {showOptions && <Options onReady={onReady} />}
      {isLoading === false ? (
        <div className="">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h3 style={{ color: score >= 0 ? "green" : "red" }}>Current Score: {score}</h3>
          </div>

          <QuestionRender
            isLoading={isLoading}
            questions={questions}
            incrementScore={incrementScore}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Quiz;
