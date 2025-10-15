var express = require('express');
var app = express();

/******************************************************
 * PLEASE DO NOT EDIT ABOVE THIS LINE
 *******************************************************/

var helmet = require('helmet');

// Use helmet to set default security headers
app.use(helmet());

// Remove X-Powered-By header to hide Express info
app.use(helmet.hidePoweredBy());

/******************************************************
 * PLEASE DO NOT EDIT BELOW THIS LINE
 *******************************************************/
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});

module.exports = app;
