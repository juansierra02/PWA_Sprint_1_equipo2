const vinosSchema = require("../models/vinos");




const inicio = (req, res) => {
    res.render('home');
}

const mostrarProductos = async(req, res) => {

    const vinos = await vinosSchema.find();
    console.log(vinos);
    res.render('productos', {
        vinos
    });
}






const formcargarProductos = (req, res) => {
    res.render('formaddproductos');
}


const cargarProductos = async(req, res) => {

    const body = req.body
    console.log(body)
    try {
        const vinos = new vinosSchema(body);
        await vinos.save();
res.redirect('/showproductos')
    } catch (error) {
        console.log('error', error)
    }
}





   
  
    










    
        










module.exports = {
    inicio,
    cargarProductos,
    mostrarProductos,
    formcargarProductos,
    
   
    
    

}



