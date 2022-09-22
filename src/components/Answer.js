import React from "react";

const Answer = ({ answer, answerClicked }) => {
  return (
    <div>
      <button
        style={{
          margin: "5px",
          borderRadius: "2px",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
        onClick={answerClicked(answer)}
      >
        {answer}
      </button>
    </div>
  );
};

export default Answer;
