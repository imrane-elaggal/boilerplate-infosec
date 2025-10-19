const express = require("express");
const helmet = require("helmet");

const app = express();

// Hide "X-Powered-By" header
app.use(helmet.hidePoweredBy());

// Prevent clickjacking
app.use(helmet.frameguard({ action: "deny" }));

// Mitigate XSS attacks
app.use(helmet.xssFilter());

// Prevent MIME-type sniffing
app.use(helmet.noSniff());

// Prevent IE from executing downloads in site's context
app.use(helmet.ieNoOpen());

// Serve static files
app.use(express.static("public"));

// Main route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// ✅ Export app for FreeCodeCamp tests
module.exports = app;
