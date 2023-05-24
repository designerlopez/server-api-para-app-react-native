const mongoose=require ('mongoose');

const URI='mongodb://127.0.0.1:27017/logistica'

mongoose.connect(URI)
.then(db=>console.log('Me conecte a la base de datos'))
.catch(err=>console.log(err))

module.exports=mongoose;