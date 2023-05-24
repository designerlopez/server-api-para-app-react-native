const mongoose=require ('mongoose');
const {Schema}=mongoose;

const SentSchema = new Schema({
    idEnvio: {
      type: String,
      required: true,
      unique: true,
    },
    origen: {
      type: String,
      required: true,
    },
    destino: {
      type: String,
      required: true,
    },
    fechaEntrega: {
      type: Date,
      required: true,
    },
    estado: {
      type: String,
      required: true,
    },
  });
  
module.exports=mongoose.model('Sent', SentSchema);

