const http = require('http')
const PORT = process.env.PORT || 9000
http
  .createServer((req, res) => {
    console.log('New connection')
    res.end('Hello Rackspace, here is our continuous deployment')
  })
  .listen(PORT, () => console.log('Listening on', PORT))