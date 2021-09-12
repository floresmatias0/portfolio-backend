const express = require('express');
const server = express();
const router = require('./router/index')

server.use(express.urlencoded({limit: "50mb"}));
server.use(express.json({limit: "50mb"}));
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); 
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
server.use('/', router)

module.exports = server;