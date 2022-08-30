
const mongoose = require('mongoose');

mongoose.connect(process.env.URI)
.then(() => console.log("Conectado a MongoDB Atlas"))
.catch((error) => console.error(error));













