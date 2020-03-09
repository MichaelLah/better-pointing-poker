import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // var HOST = location.origin.replace(/^http/, 'ws')
  // var ws = new WebSocket(HOST);
  // var el;
  //
  // ws.onmessage = function (event) {
  //   el = document.getElementById('server-time');
  //   el.innerHTML = 'Server time: ' + event.data;
  // };
  useEffect(() => {
    console.log('use effect')
    var HOST = 'ws://localhost:5001/'
    var ws = new WebSocket(HOST);
    var el;

    ws.onmessage = function (event) {
      el = document.getElementById('server-time');
      el.innerHTML = 'Server time: ' + event.data;
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.biz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
