const { response } = require("express")

// crear la controladora para la solicitud Get A LA RUTA DE USUARIO
usuaroGet=(req, res=response)=>{
    res.json({
        msg:"GET API"// devuelve un odjeto json con un mensaje que esta accediendo ala API GET
    })
}
// CONTROLADOR PARA LA SOLICITUD POST ALA RUTA DE USUARIO
usuarioPost=(req, res=response)=>{
    res.json({
        msg:"POST API"// devuelve un odjeto json con un mensaje que esta accediendo ala API GET
    })
}

// CONTROLADOR PARA LA SOLICITUD POST ALA RUTA DE USUARIO
usuarioPut=(req, res=response)=>{
    res.json({
        msg:"PUT API"// devuelve un odjeto json con un mensaje que esta accediendo ala API POST
    })
}

// CONTROLADOR PARA LA SOLICITUD POST ALA RUTA DE USUARIO
usuarioDelete=(req, res=response)=>{
    res.json({
        msg:"DELETE API"// devuelve un odjeto json con un mensaje que esta accediendo ala API PUT
    })
}
module.exports={
    usuaroGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}