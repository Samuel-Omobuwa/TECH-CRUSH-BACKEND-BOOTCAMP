// import http from 'http';

// const port = '3000';
// const hostname = '127.0.0.1';

// // Create an HTTP Server
// const server = http.createServer((req, res) => {
//     // Set response header
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     // Set response
//     res.end('Hello, World/n'); 
// })

// // listen on port 3000
// server.listen(port, ()=> {
//     console.log(`Server running at http://${hostname}:${port}`);
    
// })


// ADDING ROUTES AND JSON RESPONSES

import http from 'http';
import url from 'url';

const port = '3000';
const hostname = '127.0.0.1';
// Create Http connection
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    switch(parsedUrl.pathname){
        case '/':
            // specify response type as plain text
            res.setHeader('Content-Type', 'text/plain')
            res.end('Hello, World!\n'); 
            break;

            case '/home':
            // specify response type as json
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({message: 'Hello there'}))
            break;

            case '/user':
                // specify response type as json
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({name: 'John', age: 30}))
            break;

            default:
                res.statusCode = 404;
                res.end(JSON.stringify({error: "404 NOt found"}))
    }
})

server.listen(port, ()=> {
    console.log(`Server runing at http://${hostname}:${port}/`);
    
})
