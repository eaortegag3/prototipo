const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

function  btnEncriptar(){

    const textoEncriptado = encriptar(inputTexto.value);

    mensaje.value = textoEncriptado;
    inputTexto.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada){

  let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

  stringEncriptada = stringEncriptada.toLowerCase();

        for(let i = 0 ; i < matrizCodigo.length ; i++){
            if(stringEncriptada.includes(matrizCodigo[i][0])){

                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        } 
 return stringEncriptada;
}










