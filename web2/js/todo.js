function validarvacios()
{
    let pass=document.getElementById("pass").value
    console.log(pass.length)
    if (pass.length<=2)
    {
        document.getElementById("help-password").innerHTML="⛔ Debe contener al menos tres letras"
    }

}

function idapagina()
{
    return window.location.replace("index.html");

}
function validarMes(mes) {
    const meses = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)$/i;
    return meses.test(mes);
  } 