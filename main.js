//USANDO EXPRESS
const express = require('express');
let moment = require('moment');
const app = express();
const PORT = 8080;
let counterVisitas = 0;

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${ server.address().port } `);
})

server.on("error", error => console.log(`Error en servidor ${ error } `))

app.get('/', (req, res) => {
    res.send(`<h1>Bienvenidos al servidor express</h1>`)      
})

app.get('/visitas', (req, res) => {
    counterVisitas++;
    res.send(`Pagina visitada ${counterVisitas}`);
})

app.get('/fyh', (req, res) => {    
    res.send(`fecha ${ moment().format("DD-MM-YYYY HH:MM:SS") }`);
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