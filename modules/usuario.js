const { Schema, model } = require("mongoose")


const UsuarioSchema=Schema({
    nombre:{
        type:String,
        required: [true, 'El nombre es obligatorio']
    },
    email:{
        type:String,
        required: [true, 'El email es obligatorio']
    },
    password:{
        type:String,
        required: [true, 'El password es obligatorio'],
        minlength:3,
        maxlength:[60, 'El password maximo de 60']
    },
    rol:{
        type:String,
        required:true,
        enum:['Admin', 'Usuario']
    },
    estado:{
        type:Boolean,
        default:true,
        required:[true, 'El estado es obligatorio']
    },
});

module.exports=model('Usuario', UsuarioSchema);