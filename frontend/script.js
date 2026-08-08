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

document
.getElementById("btnCargar")
.onclick=cargarProductos;

document
.getElementById("btnAgregar")
.onclick=agregarProducto;