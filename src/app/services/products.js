const products = [
  {
    id: "1",
    nombre: "HOODIE FUTURE",
    precio: 12000,
    stock: 10,
    imagen: "https://i.ibb.co/0Ztfmf4/hoodie.png",
    categoria: "Buzos",
  },
  {
    id: "2",
    nombre: "REMERA ML NO FUTURE",
    precio: 14000,
    stock: 7,
    imagen: "https://i.ibb.co/4mQ6p3s/remeraml.png",
    categoria: "Remeras",
  },
  {
    id: "3",
    nombre: "GORRO HUMAN ERROR",
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
    }, 200);
  });
};

/* Detalle de productos */

export const getProduct = (id) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(products.find((prod) => prod.id === id));
    }, 200);
  });
};

/* Filtro por categoria */

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod)=> prod.categoria === category));
    }, 200);
  });
};
