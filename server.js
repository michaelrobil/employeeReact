const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

const { Server } = require('ws');

const wss = new Server({ server });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
var HOST = location.origin.replace(/^http/, 'ws')
var ws = new WebSocket(HOST);
var el;

ws.onmessage = function (event) {
  el = document.getElementById('server-time');
  el.innerHTML = 'Server time: ' + event.data;
};

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('close', () => console.log('Client disconnected'));
  });
