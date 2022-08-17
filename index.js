//import express from "express";

const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const hbs = require('hbs');
app.engine('hbs', hbs.__express);
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
const mysql = require('mysql2');





//coneccion con la base de datos con env para heroku
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME

});

connection.connect(function (err) {
    if (err)
        throw err;
    console.log("Base de datos conectada correctamente!");

})

const port = process.env.PORT || 3000;
//router
app.use (require('./router/RutasWeb'));




//escucha de puerto
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
