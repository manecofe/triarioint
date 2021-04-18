
var tar = document.getElementById("menu")
const myCollection = { books: [
    { title: 'Cien Años de Soledad', author: 'Gabriel García Márquez', read: true }, 
    { title: 'Do Androids Dream of Electric Sheep', author: 'Phillip K. Dick', read: false }
     ] };
var aux=`<OPTION value="-1" SELECTED>escoje un libro`



for(var i=0;i<ObjectLength(myCollection.books);i++){
   var b=Object.values(myCollection.books[i].title).join("")
    aux +=`<OPTION onClick="isRead(`+i+`)">` +b;
}


document.getElementById('menu').addEventListener('change', function isRead() {
    for(var i=0;i<ObjectLength(myCollection.books);i++){
        
        if(Object.values(myCollection.books[i].title).join("")==this.value){
            if(myCollection.books[i].read==false)
            {
                alert('Aún necesitas leer '+ this.value +' de '+ Object.values(myCollection.books[i].author).join(""))
            }
            else
            {
                alert('Ya has leido '+ this.value+' de '+ Object.values(myCollection.books[i].author).join(""))
            }
        }
    }
})


tar.innerHTML= aux




function ObjectLength( object ) {
    var length = 0;
    for( var key in object ) {
        if( object.hasOwnProperty(key) ) {
            ++length;
        }
    }
    return length;
};
