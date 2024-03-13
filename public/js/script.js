// JSON simulado con algunos productos
const products = [
  { 
      name: "Agua Nueva", 
      style: "joya", 
      image: "./assets/img/imagen13.jpg", 
      price: 18.00,
      html: "producto_agua_nueva.html" // Este es el nombre del archivo HTML para el producto "Agua Nueva"
  },
  { 
      name: "Brillo Estelar", 
      style: "otro-estilo", 
      image: "./assets/img/brillo_estelar.jpg", 
      price: 25.00,
      html: "producto_brillo_estelar.html" // Este es el nombre del archivo HTML para el producto "Brillo Estelar"
  },
  { 
    name: "Cubana Oro", 
    style: "otro-estilo", 
    image: "./assets/img/brillo_estelar.jpg", 
    price: 25.00,
    html: "producto_cubana_oro.html" // Este es el nombre del archivo HTML para el producto "Brillo Estelar"
},
  // Otros productos aquí
];

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const productsContainer = document.getElementById("productsContainer");

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

// Evento de cambio en el campo de búsqueda
searchInput.addEventListener("change", () => {
  buscar();
});











const carousel = document.getElementById('carousel');
let counter = 1;
const size = carousel.children[0].clientWidth;
carousel.style.transform = `translateX(${-size * counter}px)`;

function moveCarousel(direction) {
  if (direction === 'prev') {
    counter--;
  } else if (direction === 'next') {
    counter++;
  }
  carousel.style.transition = 'transform 0.5s ease-in-out';
  carousel.style.transform = `translateX(${-size * counter}px)`;
}

carousel.addEventListener('transitionend', () => {
  if (carousel.children[counter].id === 'firstClone') {
    carousel.style.transition = 'none';
    counter = carousel.children.length - 4;
    carousel.style.transform = `translateX(${-size * counter}px)`;
  } else if (carousel.children[counter].id === 'lastClone') {
    carousel.style.transition = 'none';
    counter = carousel.children.length - counter;
    carousel.style.transform = `translateX(${-size * counter}px)`;
  }
});

// Clonar primer y último elemento

// Auto mover el carrusel
setInterval(() => {
  moveCarousel('next');
}, 9000);