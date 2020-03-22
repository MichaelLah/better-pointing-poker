import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./LandingPage";
const WS_HOST = "ws://localhost:5001/";

function App() {
  const [webSocket, setWebSocket] = useState(null);
  const [name, setName] = useState("");
  const [joined, setJoined] = useState(false);

  const joinSession = () => {
    setJoined(true);
  };
  useEffect(() => {
    setWebSocket(new WebSocket(WS_HOST));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {!joined && <LandingPage setName={setName} joinSession={joinSession} />}

        <p id="server-time"></p>
        <a
          className="App-link"
          href="https://reactjs.biz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          onClick={() =>
            webSocket.send(JSON.stringify({ thing: "hi", two: "y eet" }))
          }
        ></button>
      </header>
    </div>
  );
}

export default App;
