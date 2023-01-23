//zona de prueba

///final de zona de prueba

//function obtPr(){
let datos;
function obtener(data){
    datos = data;
}

    
    fetch('https://api.escuelajs.co/api/v1/products').then((response) => response.json())
    .then((data) =>{
    
        console.log(data);
        obtener(data);
        for (let index = 0; index < 20; index++) {
            const element = data[index];
            document.getElementById('productos').innerHTML +=`
                <option value="${element.title}">
            `
        } 
    });
//}

function desplegarPR(nombre){

    fetch('https://api.escuelajs.co/api/v1/products').then((response) => response.json())
    .then((data) =>{
    
        var id = '/';
        console.log('nombre'+nombre);
        for (const element of data) {
            console.log(element.title);
            if(element.title == nombre){
                id = id + element.id;
                console.log(id);
                break;
            }
        }

        fetch('https://api.escuelajs.co/api/v1/products'+id).then((response) => response.json())
        .then((data) =>{
        
                //const{id,title, category, description, images, price} = prod; 
                document.getElementById('id-pr').value = data.id;
                document.getElementById('nombre-pr').value = data.title;
                document.getElementById('cat-pr').value = data.category.name;
                document.getElementById('desc-pr').value = data.description;
                document.getElementById('precio-pr').value = data.price;
            
        });
    });

}

function actPr(){
    var id = '/' + document.getElementById('id-pr').value;

    let titulo = document.getElementById('nombre-pr').value;
    let categoria = document.getElementById('cat-pr').value;
    let decrip = document.getElementById('desc-pr').value;
    let precio = document.getElementById('precio-pr').value;

    fetch('https://api.escuelajs.co/api/v1/products'+id, JSON.stringify({
        title: titulo,
        category: categoria,
        description: decrip,
        price: precio
    }));

    desplegarPR(titulo);
}


function elegir(){
    desplegarPR(document.getElementById('buscar-pr').value);
}
//document.addEventListener('DOMContentLoaded',obtPr());
//document.querySelector('#buscar-pr').addEventListener('onkeydown',desplegarPR(document.getElementById('buscar-pr')));