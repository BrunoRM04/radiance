// BUSCADOR
const products = [
  { 
      name: "Cubana Oro 45cm", 
      style: "joya", 
      image: "./product/producto1.jpg", 
      price: 990,
      html: "./product/producto_1_.html" // Ruta al archivo HTML del producto
  },
  // Agrega más productos según sea necesario
];

// Función para buscar productos
function buscar() {
  const searchTerm = searchInput.value.toLowerCase().trim();

  // Verificar si el término de búsqueda está vacío
  if (searchTerm === "") {
      // Limpiar el contenido del contenedor de resultados
      searchResults.innerHTML = "";
      return; // Salir de la función si no hay término de búsqueda
  }

  // Filtra los productos según el término de búsqueda
  const results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.style.toLowerCase().includes(searchTerm)
  );

  mostrarResultados(results);
}

// Función para mostrar los resultados de la búsqueda
function mostrarResultados(results) {
  // Limpiar los resultados anteriores
  searchResults.innerHTML = "";

  // Mostrar los resultados si hay alguno
  if (results.length > 0) {
      results.forEach(product => {
          const productElement = document.createElement("div");
          productElement.classList.add("search-result");
          productElement.innerHTML = `
              <a href="#" onclick="mostrarProducto('${product.name}', '${product.image}', '${product.price.toFixed(2)}')">
                  <img src="${product.image}" alt="${product.name}">
                  <p>${product.name} - $${product.price.toFixed(2)}</p>
              </a>
          `;
          searchResults.appendChild(productElement);
      });
  }
}

// Función para mostrar la información completa del producto en otra ventana
function mostrarProducto(name, image, price) {
  // Construir el nombre del archivo HTML basado en el nombre del producto
  const htmlFileName = `producto_${name.replace(/\s+/g, '_').toLowerCase()}.html`;
  // Abrir el archivo HTML en una nueva ventana
  window.open(htmlFileName, "_blank");
}

// Evento de entrada en el campo de búsqueda
searchInput.addEventListener("input", () => {
  buscar();
});

// BUSCADOR










