const express = require("express");

const CarRouter = require('./api/car-router')

const server = express();


server.use('/car', CarRouter)


module.exports = server;
