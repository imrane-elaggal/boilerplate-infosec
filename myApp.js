const express = require("express");
const helmet = require("helmet");

const app = express();

// Hide "X-Powered-By"
app.use(helmet.hidePoweredBy());

// Mitigate clickjacking
app.use(helmet.frameguard({ action: "deny" }));

// Mitigate XSS attacks
app.use(helmet.xssFilter());

// Serve static files
app.use(express.static("public"));

// Main route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;

// Start server
const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Your app is listening on port ${port}`);
});
