import { Schema, model } from "mongoose";

let collection = "Registro";
let schema = new Schema({
    Fecha:{type: Date, required: true},
    Descripcion:{type: String, required: true},
    Valor:{type: Number, required: true},
    Activo:{type: Boolean, required: true},
    Usuario:{type: Schema.Types.ObjectId, ref: "Usuario", required: true},
}, {
    timestamps: true

})

let Registro = model(collection, schema);
export default Registro