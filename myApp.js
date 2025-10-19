const express = require("express");
const helmet = require("helmet");

const app = express();

// 1️⃣ Hide "X-Powered-By" header
app.use(helmet.hidePoweredBy());

// 2️⃣ Mitigate Clickjacking
app.use(helmet.frameguard({ action: "deny" }));

// 3️⃣ Mitigate Cross Site Scripting (XSS) Attacks
app.use(helmet.xssFilter());

// Serve static files
app.use(express.static("public"));

// Main route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// ✅ Export app for FreeCodeCamp tests
module.exports = app;

// Start the server (for local use)
const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Your app is listening on port ${port}`);
});
