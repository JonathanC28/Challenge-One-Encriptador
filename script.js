const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const btnCopy = document.getElementById("copiar");
const divImagenInicio = document.getElementById("imagen-inicio");
divImagenInicio.style.display = "block"
mensaje.style.display ="none"
btnCopy.style.display="none"


//Encriptar mensaje

function btnEncriptar() {
        const textoE= inputTexto.value;
        const textoEValidado = validar(textoE);
        const textoEEncriptado = encriptar(textoEValidado)
        mensaje.value = textoEEncriptado
        inputTexto.value = "" 
        divImagenInicio.style.display = "none"
        mensaje.style.display= "block"
        btnCopy.style.display= "block"
    }


function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }                
    }
    console.log(stringEncriptada)
    return stringEncriptada;

    
}


//Desencriptar mensaje

function btnDesencriptar() {
    const textoD= inputTexto.value;
    const textoDValidado = validar(textoD);
    const textoDEncriptado = desencriptar(textoDValidado)
    mensaje.value = textoDEncriptado
    inputTexto.value = ""  
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada;
}


//botón copiar

function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
}

function validar(textoEncriptado){
    var valor = textoEncriptado;
    if((/^[a-z\s]+$/.test(valor)) && (/^[a-z\u00C0-\u017F\s]+$/.test(valor))){
        return valor
    }else{
        alert("Lo siento te equivocaste ingresaste mayusculas o acento a una letra")
        inputTexto.value = ""
    }
}