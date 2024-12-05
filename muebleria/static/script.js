// Función para redirigir a la página de detalles del producto y almacenar la información en localStorage
function viewProduct(name, description, price) {
    // Guarda la información del producto en localStorage
    localStorage.setItem('productName', name);
    localStorage.setItem('productDescription', description);
    localStorage.setItem('productPrice', price);

    // Redirige a la página de detalles del producto
    window.location.href = 'comp.html';
}

// Función para cargar los detalles del producto en la página de detalles
function loadProductDetails() {
    // Obtiene la información del producto desde localStorage
    document.getElementById('productName').textContent = localStorage.getItem('productName');
    document.getElementById('productDescription').textContent = localStorage.getItem('productDescription');
    document.getElementById('productPrice').textContent = 'Precio: $' + localStorage.getItem('productPrice');
}


