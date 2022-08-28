const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");


function  btnEncriptar(){
    
     limpiar(decoder(inputTexto.value,0,1));
   
}

function btnDesencriptar(){

    limpiar(decoder(inputTexto.value,1,0));  

}

function btnCopiar(){

    copiar("",mensaje.value);
    
}

function limpiar(texto){

    copiar(texto,"");
    mensaje.style.backgroundImage = "none";

}

function copiar (texto,valorString){
    mensaje.value = texto; 
    inputTexto.value = valorString;
}

function decoder(stringEncriptada,j,k){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    stringEncriptada = stringEncriptada.toLowerCase();

        for(let i = 0 ; i < matrizCodigo.length ; i++){
            if(stringEncriptada.includes(matrizCodigo[i][j])){

                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][j], matrizCodigo[i][k]);
                
            }
        } 
 return stringEncriptada;
}



