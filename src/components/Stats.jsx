import React from "react";

const Stats = props => {
  const { average, votes } = props;
  return (
    <div>
      <h2>Statistics</h2>
      <div>Average:</div>
      <div>{average}</div>
      <div>Votes:</div>
      <div>{votes}</div>
    </div>
  );
};

export default Stats;
