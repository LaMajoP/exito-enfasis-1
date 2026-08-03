const API = "http://127.0.0.1:8000";

async function cargarProductos(){

    const respuesta = await fetch(`${API}/productos`);

    const productos = await respuesta.json();

    const contenedor = document.getElementById("productos");

    contenedor.innerHTML = "";

    productos.forEach(producto=>{

        contenedor.innerHTML += `
        <div class="card">

            <h3>${producto.nombre}</h3>

            <p>Precio: ${producto.precio}</p>

            <p>Precio lista: ${producto.precio_lista}</p>

            <img src="${producto.imagen}" width="150">

            <br><br>

            <a href="${producto.url}" target="_blank">
                Ver producto
            </a>

        </div>
        `;

    });

}

async function agregarProducto(){

    const producto={

        nombre:"Producto prueba",

        precio:"$10000",

        precio_lista:"$12000",

        url:"https://www.exito.com",

        imagen:"https://picsum.photos/200"

    };

    await fetch(`${API}/productos`,{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(producto)

    });

    cargarProductos();

}

document
.getElementById("btnCargar")
.onclick=cargarProductos;

document
.getElementById("btnAgregar")
.onclick=agregarProducto;