function buscar() {
    // Aquí puedes agregar la lógica para realizar la búsqueda con JavaScript
    var query = document.getElementById("searchInput").value;
    // Ejemplo de búsqueda
    alert("Buscando: " + query);
}










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