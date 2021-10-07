//USANDO EXPRESS
const express = require('express');
const app = express();
const PORT = 3100;

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${ server.address().port } `);
})

server.on("error", error => console.log(`Error en servidor ${ error } `))

app.get('/', (req, res) => {
    res.send({ mensaje: 'Hola Mundo'})
})




/*
//PRIMER SERVIDOR
const http = require('http');
const { connect } = require('http2');
const PORT = 3000;

let server = http.createServer((req, res) => {
    res.end("Mi primer servidor");
});

const connectedServer = server.listen(PORT, () => {
    console.log(`Estamos conectados a la URl ${ connectedServer.address().port } `);
});
*/