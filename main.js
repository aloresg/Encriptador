const txaTexto = document.getElementById("texto");
const divResultado = document.getElementById("resultado");
const divSinResultados = document.getElementById("div-sin-resultados");
const btnCopiar = document.getElementById("copiar");
const spanError = document.getElementById("error");


const llaves = { a: 'ai', e: 'enter', i: 'imes', o: 'ober', u: 'ufat' };

function encriptar() {
    let texto = txaTexto.value;
    let textoEncriptado = "";

    if(texto.length > 0){
        divSinResultados.hidden = true;
    }else{
        showError("No hay texto para encriptar.");
        return;
    }
    

    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];

        if (llaves[letra] != null) {
            textoEncriptado += llaves[letra]
        } else {
            textoEncriptado += letra
        }

    }
    divResultado.textContent = textoEncriptado
    btnCopiar.style.display = "block";
}

const llavesDesenciptador = { ai: 'a', enter: 'e', imes: 'i', ober: 'o', ufat: 'u' };

function desencriptar() {
    let texto = txaTexto.value;
    const llaves = Object.keys(llavesDesenciptador);

    if(texto.length > 0){
        divSinResultados.hidden = true;
    }else{
        showError("No hay texto para desencriptar.");
        return;
    }

    for (let i = 0; i < llaves.length; i++) {
        let llave = llaves[i];
        let valor = llavesDesenciptador[llave]
        texto = texto.replace(new RegExp(llave, 'g'), valor)
    }
    divResultado.textContent = texto
    btnCopiar.style.display = "block";
}

function copiar() {
    let textoACopiar = divResultado.innerText;
    navigator.clipboard.writeText(textoACopiar)
}

function formatearTexto() {
    hideError();
    let texto = txaTexto.value;
    texto = texto.toLowerCase();
    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    txaTexto.value = texto;
}

function showError(texto){
    spanError.style.display = "block";
    spanError.textContent = texto;
}

function hideError(){
    spanError.style.display = "none";
}