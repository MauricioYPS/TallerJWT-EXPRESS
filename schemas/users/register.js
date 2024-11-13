import joi from "joi-oid";
const schema = joi.object({
    Nombre: joi.string().required().alphanum().messages({
        'string.base': 'El nombre debe ser una cadena de texto',
        'string.alphanum': 'El nombre solo puede contener letras y números',
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre no puede estar vacio',
    }),
    Correo: joi.string().email().required().messages({
        'string.base': 'El correo debe ser una cadena de texto',
        'string.email': 'El correo debe ser una dirección de correo electrónica',
        'any.required': 'El correo es requerido',
        'string.empty': 'El correo no puede estar vacio',
    }),
    Direccion: joi.string().required().messages({
        'string.base': 'La direccion debe ser una cadena de texto',
        'any.required': 'La direccion es requerida',
        'string.empty': 'La direccion no puede estar vacia',
    }),
    Telefono: joi.number().required().messages({
        'number.base': 'El telefono debe ser un numero',
        'any.required': 'El telefono es requerido',
        'number.empty': 'El telefono no puede estar vacio',
        
    }),
    Contraseña: joi.string().required().min(8).max(25).messages({
        'string.base': 'La contraseña debe ser una cadena de texto',
        'string.min': 'La contraseña debe tener al menos 8 caracteres',
        'string.max': 'La contraseña debe tener menos de 25 caracteres',
        'any.required': 'La contraseña es requerida',
        'string.empty': 'La contraseña no puede estar vacia',
    }),
    En_linea: joi.boolean().required()
})
export default schema