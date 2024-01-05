const products = [
  {
    id: 1,
    title: "Steznik",
    image_url: "/assets/images/steznik-za-koleno.png",
    description: "Steznik za koleno",
  },
  {
    id: 2,
    title: "Ortoza-za-vrat",
    image_url: "/assets/images/ortoza-za-vrat.jpeg",
    description: "Ortoza za vrat",
  },
  {
    id: 3,
    title: "Kratka-braon-perika",
    image_url: "/assets/images/barbara.jpeg",
    description: "Perika kratka braon",
  },
  {
    id: 4,
    title: "kratka-plava-perika",
    image_url: "/assets/images/diana.jpeg",
    description: "Perika kratka plava",
  },
];

export const getProducts = async () => {
  return products;
};

export const getProduct = async (title) => {
  return products.find((product) => product.title === title);
};
