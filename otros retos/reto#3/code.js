
var tar = document.getElementById("target")


function triangle(a,b){
    this.a=a
    this.b=b

    this.perimeter = function() {
        return (this.a + 2*Math.sqrt( Math.pow(this.b, 2) + Math.pow(this.a/2, 2) ))
    }

    
    this.surface = function() {
        return (this.a*this.b)/2
    }
}
function perimeter(){

}
function run(){
    var valor=document.getElementById("ingreso").value;
    var valor2=document.getElementById("ingreso2").value;
    let triangulo = new triangle(valor,valor2)

    document.getElementById("target").innerHTML=
    `
    <div>
    <p>perimetro:`+ triangulo.perimeter()+`</p>
    <p>Area:`+ triangulo.surface()+`</p>
    </div>
    `
    
}
