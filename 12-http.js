const http = require('http');


const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.end('Home Page')
  }
  if(req.url === '/about'){
    res.end('About Page')
  }
  res.end(`<h1>Ooops!</h1> <br> we can't find what you are looking for
  <a href="/about/">back to about</a> `)
})

server.listen(5000, () => {
  console.log(`Server is listening on port: 5000`)
})