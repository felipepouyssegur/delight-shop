//Muestro todos los productos cuando carga la pagina.
window.onload = () => {
  filterProduct("all");
};

// Soluciono error no cargan los items 
window.onload = () => {
  document.getElementById("boton-all").click();
};


//Creo cards de tienda.html
const traigoJson = async()=> {
  const respuesta = await fetch ('../stock.json')
  const data = await respuesta.json()

  let contenedor = document.getElementById("container")

  data.forEach((producto, indice) => {

  let card = document.createElement("div")

  card.classList.add("col-xl-3", "col-lg-3", "col-md-6", "col-sm-6", "hide", `${producto.deporte}`, "products")
  card.innerHTML = `<div class="glasses_box">
      <figure><img src="${producto.imagen}" alt="esta es una foto de ${producto.nombre}"/></figure>
      <h3><span class="blu">$</span>${producto.precio}</h3>
      <p class="product-name">${producto.nombre}</p>
      <button type="button" class="btn btn-outline-secondary boton-comprar" id="asd" onClick = "agregarAlCarrito (${indice})">COMPRAR</button>
   </div>`

  contenedor.appendChild(card)
  
  producto.card = card;
})


//Busqueda en tiempo real
const searchInput = document.getElementById("search-input")
const card = document.querySelectorAll(".products")

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()

  data.forEach(producto => {
    const isVisible =
      producto.nombre.toLowerCase().includes(value) ||
      producto.deporte.toLowerCase().includes(value)

    producto.card.classList.toggle("hide", !isVisible)

  })
})

}

traigoJson()



//Creo carrito

let cart = [];
let modalCarrito = document.getElementById("cart")
let contadorCarrito = 0;


const agregarAlCarrito = async(indice)=>  {
  const respuesta = await fetch ('../stock.json')
  const data = await respuesta.json()

    const indiceEncontradoCarrito = cart.findIndex((elemento) => {
        return elemento.id === data[indice].id
    })
    if (indiceEncontradoCarrito === -1) {
        const productoAgregar = data[indice]
        productoAgregar.cantidad = 1
        cart.push(productoAgregar)
        dibujarCarrito()
    }else {
        cart[indiceEncontradoCarrito].cantidad += 1
        dibujarCarrito()
    }

    contadorCarrito++ 

    Toastify({
        text: `Producto agregado al carrito.`,
        duration: 1500,
        style: {
            background: "linear-gradient(90deg, rgba(255,255,255,0.7231267507002801) 0%, rgba(79,79,79,1) 0%, rgba(0,0,0,1) 100%)",
          },
        }).showToast();
};


//Muestro items seleccionados en el canvas

const dibujarCarrito = () => {
    modalCarrito.className = "cart";
    modalCarrito.innerHTML = ""     
    if(cart.length > 0) {
        cart.forEach((producto, indice) => {
            const carritoContainer = document.createElement("div");
            carritoContainer.className = "producto-carrito"
            carritoContainer.innerHTML = `
            <img class = "car-img" src="${producto.imagen}"/>
            <div class="product-details>
                ${producto.nombre}
            </div>
            <div class="product-details"> Cantidad: ${producto.cantidad}</div>
            <div class="product-details"> Precio: $ ${producto.precio}</div>
            <div class="product-details"> Subtotal: $ ${
                producto.precio * producto.cantidad
            }</div>
            <button class="btn btn-dark" id="remove-product" onClick="removeProduct(${indice})">Eliminar producto</button>
            
            `;
            modalCarrito.appendChild(carritoContainer);

        })
        
        let initialTotal = 0;
        const grandTotal = cart.reduce((previousValue, currentItem) => previousValue + (currentItem.precio * currentItem.cantidad),
        initialTotal);

        const totalContainer = document.createElement("div")
        totalContainer.className = "total-carrito";
        totalContainer.innerHTML = `<div class = "total"> TOTAL $ ${grandTotal} </div>
        <button class = "btn btn-dark finalizar" id="finalizar"><a href="../paginas/finalizarcompra.html">FINALIZAR COMPRA</a></button>`
        modalCarrito.appendChild(totalContainer)

        localStorage.setItem("productos", JSON.stringify(cart))

    } else {
        modalCarrito.classList.remove("cart")
    }         
}

//Eliminar producto.

const removeProduct = (indice) => {
    cart.splice(indice, 1);
    dibujarCarrito();

    contadorCarrito--
}

//Vaciar carrito

function vaciarCarrito (indice) {
  cart.splice (indice, 100000)
  dibujarCarrito()
}



function finalizarCompra () {
vaciarCarrito() 
document.getElementById("button-close").click()
}



//Filtros (botones)

  //Parametro que envia el boton
  function filterProduct(value) {
    //Traigo clases del boton
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //checkeo si  el valor es igual al InnerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
    //Selecciono todas las cards
    let elements = document.querySelectorAll(".products");
    //Loopeo y recorro las cards
    elements.forEach((element) => {
      //Si el boton "ALL esta clickeado, elimino la clase HIDE"
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Checkeo si contiene la clase striking/grappling
        if (element.classList.contains(value)) {
          //Muestro elemento en base a su categoria
          element.classList.remove("hide");
        } else {
          //Escondo a los otros elementos
          element.classList.add("hide");
        }
      }
    });
  }



// Loader (Animacion de carga)

let loader = document.querySelector("#preloader")

window.addEventListener("load", function() { 
  loader.style.display = "none"
})


