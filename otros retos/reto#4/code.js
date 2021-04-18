



function person( nombre, edad, sexo, peso, altura){
    this.nombre=nombre
    this.edad=edad
    this.sexo=sexo
    this.peso=peso
    this.altura=altura
    this.RFC

    this.calcularIMC= function(){
        return (this.peso/Math.pow(this.altura,2))
    }
    this.obtenerRFC= function(){
        var aux=nombre[0]
        aux+=nombre[1]
        aux+=getFullYear()-edad;
        if(sexo==f){
            aux+="0f"
        }else{
            aux+="1m"
        }
        this.RFC=aux;
    }
    this.esmayordeedad= function(){
        var aux=false
        if(edad>=18){
            aux=true
        }
        return aux
    }
}

