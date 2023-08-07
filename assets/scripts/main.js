console.log("HOLA");
let categoriasItems = document.querySelectorAll( "#peopleCarouselIndicators .peopleCarousel-item" );
  const carruselFuncion = (grupoDeElementos) => {

    console.log("items", grupoDeElementos);
    grupoDeElementos.forEach((el) => {
      const minPerSlide = 3;
      let next = el.nextElementSibling;
      console.log("next", next);
      for (let i = 1; i < minPerSlide; i++) {
        if (!next) {
          //
          next = grupoDeElementos[0];
        }
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
      }
    });
  };
  carruselFuncion(categoriasItems);

  let i = 1;
  for(let li of document.querySelectorAll('.carouselPrueba-item')) {
    li.style.position = 'relative';
    // li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
  }

  /* configuración */
  let width = 130; // ancho de las imágenes
  let count = 3; // conteo de las imágenes visibles

  let list = document.querySelector('.carouselPrueba-list');
  let listElems = document.querySelectorAll('.carouselPrueba-item');

  let position = 0; // posición del desplazamiento del carrete

  document.querySelector('.arrow-prev').onclick = function() {
    // desplazamiento izquierdo
    position += width * count;
    // no podemos mover demasiado a la izquierda, se acaban las imágenes
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
  };

  document.querySelector('.arrow-next').onclick = function() {
    // desplazamiento derecho
    position -= width * count;
    // solo se puede desplazar el carrete de imágenes (longitud total de la cinta - conteo visibles)
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
  };