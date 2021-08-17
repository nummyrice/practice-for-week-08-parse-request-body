const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here
const http = require('http');
// const { setHeader } = require("http2");
server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
    // res.end('its working');
})

const port = 5000;

server.listen(port, () => {
    console.log('Server is listening on port', port);
})

// statusCode
// setHeader
// Write
// End
/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
