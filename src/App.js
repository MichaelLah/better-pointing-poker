import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./LandingPage";
const WS_HOST = "ws://localhost:5001/";

function App() {
  const [webSocket, setWebSocket] = useState(null);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [joined, setJoined] = useState(false);

  const joinSession = () => {
    setJoined(true);
  };
  useEffect(() => {
    setWebSocket(new WebSocket(WS_HOST));
    const fetchPlayers = async () => {
      const response = await fetch("/current_players");
      const json = await response.json();
      console.log(json);
    };
    fetchPlayers();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {!joined && <LandingPage setName={setName} joinSession={joinSession} />}

        <button
          onClick={() =>
            webSocket.send(JSON.stringify({ thing: "hi", two: "y eet" }))
          }
        >
          test send data
        </button>
      </header>
    </div>
  );
}

export default App;
