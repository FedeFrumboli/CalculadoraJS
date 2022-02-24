'use strict'

function capturarNumeros(){
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var resultado = numero1 + numero2;
    document.getElementById("resultado").innerHTML = `<h3>${resultado}</h3>`;
    if (resultado != null){
        document.getElementById("resultado").style.border = "2px solid green";
    }

}
