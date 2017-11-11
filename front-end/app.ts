/// <reference path="libs/jquery/index.d.ts" />

//DEFINO EL SERVIDOR
var servidor : string = "http://localhost:8080/jwt_2017/back-end/api/";


function CrearToken() : void{
        
    $.ajax({
        type: "post",
        url: servidor + "jwt/CrearToken"   		
    })
    .done(function(retorno){

        console.info("OK ", retorno);
        
        //GUARDO EL TOKEN EN EL LOCALSTORAGE (testJWT)
        if (typeof(Storage) !== "undefined") {

            localStorage.setItem('testJWT', retorno);

        } 
        else {
            console.log("Sorry! No se soporta el almacenamiento web local.");
        }		
    
    })
    .fail(function(error){
        console.info("ERROR!!!",error);
    });

}

function VerificarToken() : void{

//VERIFICO QUE EL TOKEN ESTE ALMACENADO EN EL LOCALSTORAGE    
    if(localStorage.getItem('testJWT') === null){
        console.info("No existe el token!!!", 404);
        return;
    }
//console.log(localStorage.getItem('testJWT'));return;/*
    $.ajax({
        url: servidor + "jwt/VerificarToken",
        type: 'POST',
        data:{
            token : localStorage.getItem('testJWT')
        }
    })
    .done(function(retorno) {
      
      console.info("OK -->", retorno);
      
    })
    .fail(function(error) {
      console.info("ERROR!!!", error);
    });
}

function ObtenerPayLoad() : void{
    //VERIFICO QUE EL TOKEN ESTE ALMACENADO EN EL LOCALSTORAGE 
    if(localStorage.getItem('testJWT') === null){
        console.info("No existe el token!!!", 404);
        return;
    }
    $.ajax({
        url: servidor + "jwt/ObtenerPayLoad",
        type: 'POST',
        data:{
            token : localStorage.getItem('testJWT')
        }
    })
    .done(function(retorno) {
      
      console.info("PayLoad -->", retorno);
      
    })
    .fail(function(error) {
      console.info("ERROR!!!", error);
    });
}

function ObtenerData() : void{
   //VERIFICO QUE EL TOKEN ESTE ALMACENADO EN EL LOCALSTORAGE 
   if(localStorage.getItem('testJWT') === null){
    console.info("No existe el token!!!", 404);
    return;
}
$.ajax({
    url: servidor + "jwt/ObtenerData",
    type: 'POST',
    data:{
        token : localStorage.getItem('testJWT')
    }
})
.done(function(retorno) {
  
  console.info("Obtengo Data -->", retorno);
  
})
.fail(function(error) {
  console.info("ERROR!!!", error);
});
}



function IngresarJWT() : void{
    
    let usuarioT:any=$("#usuario").val();
    let claveT:any=$("#clave").val();

    $.ajax({
        url: servidor + "ingreso/",
        type: 'POST',
        data:{
            usuario:usuarioT,
            clave:claveT
        }
    })
    .done(function(retorno) {
      
      console.info("Ingreso con usuario y contraseña -->", retorno);
      localStorage.setItem('miTokenUTNfra',retorno['token']);
      
    })
    .fail(function(error) {
      console.info("ERROR!!!", error);
    });

}

function EnviarJWT() {
    if(localStorage.getItem('miTokenUTNfra') === null){
        console.info("No existe el token!!!", 404);
        return;
    }
    else
    {
        let mitoken:any=localStorage.getItem('miTokenUTNfra');
        console.log(mitoken);
    $.ajax({
        url: servidor + "tomarToken",
        type: 'GET',
        headers:{ miTokenUTNfra: mitoken}
        
    })
    .done(function(retorno) {
      
      console.info(retorno);
      
    })
    .fail(function(error) {
      console.info("ERROR!!!", error);
    });
    }
}