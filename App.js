const express = require("express");
const path = require("path");
const app = express();
const { Server } = require("ws");
const PORT = process.env.PORT || 5000;

const projectPath = process.env.NODE_ENV === "dev" ? "public" : "build";

app.use(express.static(path.join(__dirname, projectPath)));

app.get("/", (req, res) => {
  console.log(process.env);

  const fileToSend = process.env.NODE_ENV === "dev" ? "index.js" : "index.html";
  console.log({ fileToSend, projectPath });
  res.sendFile(path.join(__dirname, projectPath, fileToSend));
});

app.get("/file", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "logo.svg"));
});
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

/*
  WEBSOCKET SERVER STUFF
 */
const wss = new Server({ port: 5001 });

wss.on("connection", ws => {
  console.log("client connected!");

  ws.on("message", data => {
    const jsonMessage = JSON.parse(data)
    console.log("got a message!!!!!!!!!!");
    console.log(jsonMessage);
    sendAllMessages('hi everyone')
  });
  ws.on("close", () => console.log("DC!"));
});

// setInterval(() => {
//   wss.clients.forEach(client => {
//     client.send(new Date().toTimeString());
//   });
// }, 1000);

const sendAllMessages = message => {
  wss.clients.forEach(client => {
    client.send(message);
  });
};
