//import express from "express";

const express = require('express');
const app = express();
const PORT = 3000;


// Servidor 
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el Puerto ${PORT}`);
});
app.on('error', (error) =>{
    console.log(`Tenemos un error ${error}`);
});