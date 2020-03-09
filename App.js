const express = require("express");
const path = require("path");
const app = express();
const { Server } = require("ws");
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "build")));

app.get("/ping", (req, res) => {
  return res.send("pong");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/file", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "logo.svg"));
});

console.log(process.env);
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

//Websocket stuff

// const app2 = express()
//   .use((req, res) => res.sendFile("index.html", { root: __dirname }))
//   .listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new Server({ port: 5001 });

wss.on("connection", ws => {
  console.log("client connected!");
  ws.on("close", () => console.log("DC!"));
});

setInterval(() => {
  wss.clients.forEach(client => {
    client.send(new Date().toTimeString());
  });
}, 1000);
