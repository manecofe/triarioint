
var tar = document.getElementById("target")
var resultado


function decimaltobinary(){
    valor=document.getElementById("ingreso").value;
    
    valor=Number(valor).toString(2);
    console.log(valor);

    document.getElementById("target").innerHTML=
    `
    <div>
    <p>resultado:`+valor+`</p>
    </div>
    `
    
}
