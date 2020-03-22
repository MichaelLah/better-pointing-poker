import React from "react";

const LandingPage = props => {
  const { setName, joinSession } = props;

  return (
    <>
      <div>Name:</div>
      <input type={"text"} onChange={e => setName(e.target.value)} />
      <button onClick={joinSession}>Join Session</button>
    </>
  );
};

export default LandingPage