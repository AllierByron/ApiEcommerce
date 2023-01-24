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
        document.getElementById('productos').innerHTML =" ";
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
            
        }).catch(()=>{
            alert("Error");
        });
    }).catch(()=>{
        alert("Error");
    });

}

function actPr(){
    var id = '/' + document.getElementById('id-pr').value;

    let titulo = document.getElementById('nombre-pr').value;
    let categoria = document.getElementById('cat-pr').value;
    let decrip = document.getElementById('desc-pr').value;
    let precio = document.getElementById('precio-pr').value;

    fetch('https://api.escuelajs.co/api/v1/products'+id, {
        method: 'PUT',
        headers: {  
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "title": titulo,
            "category":{"name":categoria},
            "description": decrip,
            "price":precio
        })
    }).then((response) => response.json())
    .then((data) =>{
        console.log(data);
        document.getElementById('id-pr').value = data.id;
        document.getElementById('nombre-pr').value = data.title;
        document.getElementById('cat-pr').value = data.category.name;
        document.getElementById('desc-pr').value = data.description;
        document.getElementById('precio-pr').value = data.price;
    });
    obtener();
    //desplegarPR(titulo);
}


function elegir(){
    desplegarPR(document.getElementById('buscar-pr').value);
}

let categori2 = []; 

function categorias(){
    fetch('https://api.escuelajs.co/api/v1/products').then((response) => response.json())
    .then((data) =>{
    
        //console.log(data);
        obtener(data);
        const categori = [];
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            const name = element.category.name;

            const id = element.category.id;

            //console.log(i);
            var contador = 0;
            var boole = false;
            do {
                if(name != categori[contador] ){
                    //console.log("nombre: "+name);
                    //console.log("categori: "+categori+", "+contador);

                    boole = true;
                    
                }else{
                    boole = false;
                    break;
                }
                contador++;
            } while (contador < categori.length);

            if(boole == true){
                categori.push(name);    
                categori2.push([name, id])
                console.log();
            }
        }
        //console.log(categori2[3][0]);

        for (let index = 0; index < categori.length; index++) {
            const element = categori[index];
            //console.log(element);
            document.getElementById('cat-pr').innerHTML +=`
                <option value="${element}">${element}</option>
            `
        } 
    });
}

function crearPr(){

    let titulo = document.getElementById('nombre-pr').value;
    let categoria = 0;
    for (let index = 0; index < categori2.length; index++) {
        const element = categori2[index][0];

        if(document.getElementById('cat-pr').value == element){
            categoria = categori2[index][1];
            break;
        }
        
    }

    let decrip = document.getElementById('desc-pr').value;
    let precio = document.getElementById('precio-pr').value;
    let img = "https://placeimg.com/640/480/any";   

    fetch('https://api.escuelajs.co/api/v1/products', {
        method: 'POST',
        headers: {  
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "title": titulo,
            "categoryId":categoria,
            "description": decrip,
            "price":precio,
            "images":[img]
        })
    }).then((response) => response.json())
    .then((data) =>{
        console.log(data);
        document.getElementById('id-pr').value = data.id;
        document.getElementById('nombre-pr').value = data.title;
        document.getElementById('cat-pr').value = data.category.name;
        document.getElementById('desc-pr').value = data.description;
        document.getElementById('precio-pr').value = data.price;
    });
}

function deletePr(){
    var pr = '/'+document.getElementById('id-pr').value;

    fetch('https://api.escuelajs.co/api/v1/products'+pr,{
        method: 'DELETE',
        headers: {  
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json())
    .then((data) =>{console.log("respuest de elimi:" +data)});

}

document.addEventListener('DOMContentLoaded',categorias());
//document.querySelector('#buscar-pr').addEventListener('onkeydown',desplegarPR(document.getElementById('buscar-pr')));