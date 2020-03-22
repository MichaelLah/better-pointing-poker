import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const WS_HOST = "ws://localhost:5001/";

function App() {
  const [webSocket, setWebSocket] = useState(null);
  // var HOST = location.origin.replace(/^http/, 'ws')
  // var ws = new WebSocket(HOST);
  // var el;
  //
  // ws.onmessage = function (event) {
  //   el = document.getElementById('server-time');
  //   el.innerHTML = 'Server time: ' + event.data;
  // };
  useEffect(() => {
    // var el;
    setWebSocket(new WebSocket(WS_HOST));
    // webSocket.onmessage = function (event) {
    //   el = document.getElementById('server-time');
    //   el.innerHTML = 'Server time: ' + event.data;
    // };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
