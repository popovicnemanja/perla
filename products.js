const products = [
  {
    id: 1,
    title: "steznik",
    image_url: "/assets/images/steznik-za-koleno.jpg",
    description:
      "Steznik za koleno je medicinski uređaj koji se koristi za pružanje podrške, stabilnosti i kompresije zglobu koljena.",
  },
  {
    id: 2,
    title: "ortoza-za-vrat",
    image_url: "/assets/images/ortoza-za-vrat.jpg",
    description:
      "Ortoza za vrat je medicinski uređaj dizajniran da pruži podršku i stabilnost vratu. Koristi se u terapeutske svrhe kako bi se smanjila bol, ograničila pokretljivost ili podržao proces ozdravljenja nakon povrede.",
  },
  {
    id: 3,
    title: "kratka-braon-perika",
    image_url: "/assets/images/barbara.jpg",
    description: "Perika kratka braon",
  },
  {
    id: 4,
    title: "kratka-plava-perika",
    image_url: "/assets/images/diana.jpg",
    description: "Perika kratka plava",
  },
];

export const getProducts = async () => {
  return products;
};

export const getProduct = async (title) => {
  return products.find((product) => product.title === title);
};

export const searchProducts = async (searchValue) => {
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return filteredProducts;
};
