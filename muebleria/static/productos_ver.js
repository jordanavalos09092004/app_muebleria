// Obtener el valor del parámetro URL
const ParametroURL = new URLSearchParams(window.location.search);
const id_producto = parseInt(ParametroURL.get('id_producto'), 10);

// Datos de los productos
const productos = {
    1: {
        nombre: "SILLA",
        imagen: "assets/imagenes/images.jpeg",
        descripcion: "Silla color café",
        precio: "$100.00"
    },
    2: {
        nombre: "GUARDA ROPAS",
        imagen: "assets/imagenes/assets.jpeg",
        descripcion: "Guarda ropas marrón",
        precio: "$500.00"
    },
    3: {
        nombre: "SILLÓN",
        imagen: "assets/imagenes/descargar (1).jpeg",
        descripcion: "Sillón color gris",
        precio: "$300.00"
    },
    4: {
        nombre: "SILLÓN",
        imagen: "assets/imagenes/imagensillon.jpeg",
        descripcion: "Sillón gris",
        precio: "$200.00"
    },
    5: {
        nombre: "MESA",
        imagen: "assets/imagenes/images (2).jpeg",
        descripcion: "Mesa blanca",
        precio: "$1000.00"
    },
};

// Actualizar etiquetas de texto HTML según el producto
if (productos[id_producto]) {
    document.getElementById("nombre_producto").textContent = productos[id_producto].nombre;
    document.getElementById("img_pto").src = productos[id_producto].imagen;
    document.getElementById("descripcion_pto").textContent = productos[id_producto].descripcion;
    document.getElementById("precio_pto").textContent = productos[id_producto].precio;
} else {
    document.getElementById("nombre_producto").textContent = "El producto no existe";
    document.getElementById("img_pto").style.display = "none";
    document.getElementById("descripcion_pto").textContent = "NULL";
    document.getElementById("precio_pto").textContent = "NULL";
}
