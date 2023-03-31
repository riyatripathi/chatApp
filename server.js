const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const onSocket = require("./socket.js");

onSocket(io);

app.use(express.static("public"));

app.get("/", (req, resp) => {
  resp.sendFile(__dirname + "/public/index.html");
});

http.listen(8000, () => {
  console.log("Server running...");
});
