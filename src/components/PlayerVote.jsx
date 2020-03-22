import React from "react";

const PlayerVote = props => {
  const { name, points, hasVoted } = props;

  return (
    <div>
      <div
        className={`player-vote__vote-status${hasVoted ? "--voted" : ""}`}
      ></div>
      <div className={"player-vote__voter-name"}>{name}</div>
      <div className={"player-vote__points"}>{points}</div>
    </div>
  );
};

export default PlayerVote