/*document.addEventListener('DOMContentLoaded',productos)

async function productos(){
    const url = 'https://fakestoreapi.com/products';

    try {
        const resultado = await fetch(url);
        const respuesta = await resultado.json();
        pintarProductos(respuesta);

        
    } catch (error) {
        console.log(error);
    }
}

function pintarProductos(respuesta){
    console.log(respuesta);
    document.getElementById('contenido').innerHTML = respuesta;
}*/

var cate = ' ';

document.addEventListener('DOMContentLoaded',buscar());

document.querySelector('#categorias').addEventListener('change',function(){
    cate = document.getElementById('categorias').value;
    buscar(cate);
    //location.reload();
});





//console.log(nombre);

// {var arr = console.log(data); return arr;}