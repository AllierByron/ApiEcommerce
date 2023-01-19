function buscar(cate = ' '){
    //location.reload();
    document.getElementById('load').innerHTML = "Cargando..."
    fetch('https://api.escuelajs.co/api/v1/products'+cate).then((response) => response.json())
    .then((data) =>{
        data.forEach((prod) =>{
            const{id,title, category, description, images, price} = prod; 
            
        })
        console.log(data);
        console.log("longitud: "+data.length);
        for (let index = 0; index < data.length; index++) {
            const element = data[index];

            //vacia los contenedores
            if(index == 0){
                document.getElementById('load').innerHTML = " "
                document.getElementById('contenedor').innerHTML = " "
            }

            //limita el numero de productos desplegado //Pendiente: añadir funcion a interfaz para definir el limite desde ahi
            if(index == 100){
                break;
            }
            
            //funcion encargada de crear los elementos donde estan los productos
            document.getElementById('contenedor').innerHTML += `
            <div class="row p-2 bg-white border rounded">
                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="${element.images[0]}" width="50%"></div>
                <div class="col-md-6 mt-1">
                    <h5>${element.title}</h5>
                    <div class="d-flex flex-row">
                        <div class="ratings mr-2"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><span>${element.category.id}</span>
                    </div>
                    <div class="mt-1 mb-1 spec-1"><span>${element.category.name}</span><span class="dot"></span><span></span><span class="dot"></span><span><br></span></div>
                    <!--<div class="mt-1 mb-1 spec-1"><span></span><span class="dot"></span><span></span><span class="dot"></span><span><br></span></div>-->    
                    <p class="text-justify text-truncate para mb-0" style="text-overflow:clip; ">${element.description}<br><br></p>
                </div>
                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div class="d-flex flex-row align-items-center">
                        <h4 class="mr-1">$${element.price}</h4><span class="strike-text"></span>
                    </div>
                    <h6 class="text-success">Envio Gratuito</h6>
                    <div class="d-flex flex-column mt-4"><button class="btn btn-primary btn-sm" type="button">Detalles</button><button class="btn btn-outline-primary btn-sm mt-2" type="button">Añadir a carrito</button></div>
                </div>
            </div>`
        }
    });
}

//buscar(document.getElementById('categorias').value);