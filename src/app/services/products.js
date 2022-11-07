const products = [
  {
    id: "1",
    nombre: "Buzo",
    precio: 12000,
    stock: 5,
    imagen: "https://i.ibb.co/0Ztfmf4/hoodie.png",
    categoria: "Buzos",
  },
  {
    id: "2",
    nombre: "Remera Manga Larga",
    precio: 14000,
    stock: 7,
    imagen: "https://i.ibb.co/4mQ6p3s/remeraml.png",
    categoria: "Remeras",
  },
  {
    id: "3",
    nombre: "Gorro",
    precio: 7000,
    stock: 12,
    imagen: "https://i.ibb.co/4295NPv/gorro.png",
    categoria: "Gorros",
  },
];

/* TODOS los productos. */
export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 1500);
  });
};

/* Detalle de productos */

export const getProduct = (id) => {
  console.log(products);
  return new Promise((res) => {
    setTimeout(() => {
      res(products.find((prod) => prod.id === id));
    }, 1500);
  });
};

/* Filtro por categoria */

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod)=> prod.categoria === category));
    }, 3000);
  });
};
