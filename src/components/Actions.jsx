import React from "react";

const Actions = props => {
  const { clearVotes, showVotes } = props;
  return (
    <div>
      <button onClick={clearVotes}>Clear Votes</button>
      <button onClick={showVotes}>Show Votes</button>
    </div>
  );
};

export default Actions;
