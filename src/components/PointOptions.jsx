import React from "react";

const OPTIONS = ["0", "1", "2", "3", "5", "8", "13"];

const getText = option => {
  if (option === "?") {
    return "?";
  }
  const plural = option !== "1";

  return `${option} point${plural ? "" : "s"}`
};
const PointOptions = props => {
  const { vote } = props;

  const voteButtons = OPTIONS.map(option => {
    const text = getText(option);
    return <button onClick={() => vote(option)}>{text}</button>;
  });

  return { voteButtons };
};

export default PointOptions;
