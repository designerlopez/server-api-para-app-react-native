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

//metodo get por id usando findbyId para poder ver  un envio en especifico
router.get('/:id', async (req, res) => {
    const sent = await Sent.findById(req.params.id);
    res.json(sent);
  });

//metodo update usando put() pero usando el id
router.put('/:id', async (req, res)=>{
    try{    
        const {title, description}=req.body;
        const newSent= {title, description};
        await Sent.findByIdAndUpdate(req.params.id, newSent);
        res.json({status:'Sent Updated'});
    }catch(err){
        console.error(err);
        res.status(404).send(err);
        console.log("este es el error"+err);
    }
    })

    //metodo find para poder filtrar por una query en este caso la query seria para poder filtrar por estado
    //del envio
    router.get('/', async (req, res) => {
        try {
          const { estadodelenvio } = req.query;
          const query = estadodelenvio ? { estadodelenvio } : {}; // Objeto de filtro basado en el parámetro de consulta "estadodelenvio"
          const sents = await Sent.find(query);
         
          res.json(sents);
        } catch (err) {
          console.error(err);
          res.status(500).send(err);
        }
      });
      


module.exports=router;