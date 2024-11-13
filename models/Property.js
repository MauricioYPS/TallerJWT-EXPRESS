import {Schema, model} from 'mongoose';

let collection = 'Propiedad';
let schema = new Schema({
    Nombre:{type: String, required: true},
    Valor:{type: Number, required: true},
    Usuario:{type: Schema.Types.ObjectId, ref: "Usuario", required: true},
}, {
    timestamps: true
})

let Propiedad = model(collection, schema);    
export default Propiedad;