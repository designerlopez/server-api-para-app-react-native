const express = require ('express');
const router=express.Router();
const Sent=require('../models/sent')

//metodo get usando find(); para poder mostrar el listado de todos los envios
router.get('/', async (req, res) => {
    try {
        const sents = await Sent.find();
       
        res.json(sents);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

//metodo post usando save() para poder crear nuevos envios y guardarlos
router.post('/', async(req, res)=>{
    try{
        const {idEnvio, origen, destino, fechaEntrega,estado }=req.body;
    const sents=new Sent({
        idEnvio:idEnvio,
        origen: origen,
        destino: destino, 
        fechaEntrega: fechaEntrega,
        estado: estado
    })
    await sents.save();
    res.json({status:'Sent Saved'});
    }
    catch(err){
        console.error(err);
        res.status(500).send(err);
    }
} )


module.exports=router;