// import http from 'http';
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';
// const port = '3000';
// const hostname = '127.0.0.1';

// //since we do not have __dirname and __filename in ESM
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const server = http.createServer((req, res) => {
// if (req.url === '/user') {
// // Define some dynamic data as if we were using a database connection
// const userData = { username: 'JohnDoe', email: 'johndoe@example.com' };

// // Read the HTML file
// const filePath = path.join(__dirname, 'public', 'user.html');
// fs.readFile(filePath, 'utf8', (err, html) => {
//  if (err) {
//  res.statusCode = 500;
//  res.setHeader('Content-Type', 'text/plain');
// res.end('Server Error');
// return;
// }

// // Replace placeholders with actual data
// let renderedHtml = html.replace('{{username}}', userData.username);
//  renderedHtml = renderedHtml.replace('{{email}}', userData.email);
// // Send the modified HTML file
// res.statusCode = 200;
// res.setHeader('Content-Type', 'text/html');
//  res.end(renderedHtml);
// });
// } else {
// // Handle other routes or serve static files
// res.statusCode = 404;
// res.end('Not Found');
// }
// });
// server.listen(port, () => {
//  console.log(`Server running at http://${hostname}:${port}/`);
// });


// USING EXPRESS.JS

import express from 'express';
const port = 3000;

const app = express();

// sending data to the server
app.get('/', (req, res) => {
    res.send("This is our Express.js page");
})
app.get('/about', (req, res) => {
    res.json({message: 'About Us', description: 'This is a sample Express.js app'})
})
app.get('/contact', (req, res) => {
    res.status(200).json({message: 'Contact Us',  Description: "contact@example.com"})
})

// Starting the server
app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`);
    
})