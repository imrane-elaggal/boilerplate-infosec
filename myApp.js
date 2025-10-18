var express = require('express');
var app = express();
var helmet = require('helmet');

/******************************************************
 * PLEASE DO NOT EDIT ABOVE THIS LINE
 *******************************************************/

// Use helmet.hidePoweredBy() middleware
app.use(helmet.hidePoweredBy());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

/******************************************************
 * PLEASE DO NOT EDIT BELOW THIS LINE
 *******************************************************/
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Your app is listening on port ${PORT}`));

module.exports = app;
