import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const startServer = (options) => {
    const {port, public_path = 'public'} = options;

    const app =  express()

    //para poder usar middlewares se una la palabra use(express)
    app.use(express.static(public_path)) //contenido estatico que ponemos disponible

    app.get(/.*/, (req, res) => {
        const indexPath = path.join(__dirname + `../../${public_path}/index.html`);
        res.sendFile(indexPath)
    });
    app.listen(port, () => {
        console.log(`Escuchando en el Puerto ${port}`)
    })

}


/* const express = require('express');
const path = require('path');

const startServer = (options) => {
    const {port, public_path = 'public'} = options
    
    const app =  express()

    //para poder usar middlewares se una la palabra use(express)
    app.use(express.static(public_path)) //contenido estatico que ponemos disponible

    app.get((request, response) => {
        const indexPath = path.join(__dirname + `../../public/index.html`);
        response.sendFile(indexPath)
    });
    app.listen(port, () => {
        console.log(`Escuchando en el Puerto ${port}`)
    })
}

module.exports = {
    startServer
} */
