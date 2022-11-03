const products = [
  {
    id: 1,
    nombre: "Buzo",
    precio: 12000,
    stock: 5,
    imagen: "https://i.ibb.co/4mQ6p3s/remeraml.png",
  },
  {
    id: 2,
    nombre: "Hood",
    precio: 14000,
    stock: 7,
    imagen: "https://i.ibb.co/0Ztfmf4/hoodie.png",
  },
  {
    id: 3,
    nombre: "Gorro",
    precio: 7000,
    stock: 12,
    imagen: "https://i.ibb.co/4295NPv/gorro.png",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
};

export const getProduct = (id) => {
  console.log(products);
  return new Promise((res) => {
    setTimeout(() => {
      res(products.find((prod) => prod.id === id));
    }, 2000);
  });
};
