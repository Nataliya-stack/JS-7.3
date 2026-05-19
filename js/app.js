    let carrito = [];

    const INPUT = document.getElementById("producto-input");
    const LISTA = document.getElementById("lista-compras");
    const PRODUCTOS = document.getElementById("num-prod");
    const MENSAJE = document.getElementById("mensaje");

    function agregar() {

      let producto = INPUT.value.toUpperCase().trim(); 

      let posicionExistente = carrito.indexOf(producto);

      if (posicionExistente !== -1) {
        MENSAJE.innerHTML = "¡El producto " + producto + " ya está en la lista!";
      }
      else if (producto === "") {
        MENSAJE.innerText = "Escribe algo primero.";
      }
      else {
        carrito.push(producto);
        console.table(carrito);

        let posicion = carrito.indexOf(producto);

        let nuevoElemento = `<li id="${posicion}" class="py-1">${producto}</li>`;

        LISTA.insertAdjacentHTML("beforeend", nuevoElemento);

        MENSAJE.innerHTML = "Último producto agregado: " + producto;
        PRODUCTOS.innerHTML = carrito.length
        INPUT.value = "";
      }
    }

