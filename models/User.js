import {Schema,model} from 'mongoose';

let collection = 'Usuario';
let schema = new Schema({
    Nombre:{type: String, required: true},
    Correo:{type: String, required: true},
    Direccion:{type: String, required: true},
    Telefono:{type: Number, required: true},
    Contraseña:{type: String, required: true},
    En_linea:{type: Boolean, required: true},
},{
    timestamps: true,
})

let Usuario = model(collection,schema);
export default Usuario;