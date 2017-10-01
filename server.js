//import something into a variabble
// import config, { nodeEnv, logStars} from './config';
// console.log(config, nodeEnv);
// logStars('function');

//https/ https modules
//use as client
//import
// import https from 'https';

// //read constents of lynda.com
// https.get('https://www.lynda.com', res => {
//     //callback status
//     console.log('Response status code: ', res.statusCode);
//     //get what is on the page
//     res.on('data', chunk => {
//         console.log(chunk.toString());
//     });
// });


// https/ https modules
// use as server
//import http from 'http';





//create server
// const server = http.createServer((req, res)=>{
//     //write back to user
//     res.write('Hello Http\n');
//     //write back to user after 3 seconds
//     setTimeout(()=>{
//         res.write('i can stream\n');
//         //terminate stream response
//         res.end();
//     },3000);
// });
// //listen methond to run server on  number port
// server.listen(8080);
// //event emitter event

//create express server
//import express
import express from 'express';
//import api router
import apiRouter from './api';
import config, { logStars } from './config';
//read files
//import fs from 'fs';
//create server
const server = express();
//listen to number port that server will run on
//handle server side routing
server.get('/', (req,res)=>{
    //you can see this on browser with localhost:8080
    res.send('Hello Express');
});
//server.use(server.router);
//apiRouter.initialize(server);
server.use('/api', apiRouter);
//static middleware
//looks in the public folder when localhost:8080/about.html
//server.use(express.static('public'));
//this is what user sees when in address is localhost:8080/about.html

// server.get('/about.html',(req,res)=>{
//     //read from a file
//     //you can see this on browser with localhost:8080/about.html
//     fs.readFile('./about.html', (err,data)=>{
//         res.send(data.toString());
//     });
// });

//this is what user sees when in address is localhost:8080/about.html
// server.get('/about.html', (req,res)=>{
//     //you can see this on browser with localhost:8080/about.html
//     res.send('this nuts');
// });

server.listen(config.port, () =>{
    //you see this on conole that called babel-node server.js
    console.info('Express listening on port: ', config.port);
});
