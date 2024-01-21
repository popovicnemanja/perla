const products = [
  {
    id: 1,
    title: "steznik",
    image_url: "/assets/images/steznik-za-koleno.jpg",
    description:
      "Steznik za koleno je medicinski uređaj koji se koristi za pružanje podrške, stabilnosti i kompresije zglobu koljena.",
    category: "steznici za koleno",
  },
  {
    id: 2,
    title: "ortoza-za-vrat",
    image_url: "/assets/images/ortoza-za-vrat.jpg",
    description:
      "Ortoza za vrat je medicinski uređaj dizajniran da pruži podršku i stabilnost vratu. Koristi se u terapeutske svrhe kako bi se smanjila bol, ograničila pokretljivost ili podržao proces ozdravljenja nakon povrede.",
    category: "ortoze za vrat",
  },
  {
    id: 3,
    title: "kratka-braon-perika",
    image_url: "/assets/images/barbara.jpg",
    description: "Perika kratka braon",
    category: "perike",
  },
  {
    id: 4,
    title: "kratka-plava-perika",
    image_url: "/assets/images/diana.jpg",
    description: "Perika kratka plava",
    category: "perike",
  },
  {
    id: 5,
    title: "steznik2",
    image_url: "/assets/images/steznik-za-koleno.jpg",
    description:
      "Steznik za koleno je medicinski uređaj koji se koristi za pružanje podrške, stabilnosti i kompresije zglobu koljena.",
    category: "steznici za koleno",
  },
  {
    id: 6,
    title: "ortoza-za-vrat2",
    image_url: "/assets/images/ortoza-za-vrat.jpg",
    description:
      "Ortoza za vrat je medicinski uređaj dizajniran da pruži podršku i stabilnost vratu. Koristi se u terapeutske svrhe kako bi se smanjila bol, ograničila pokretljivost ili podržao proces ozdravljenja nakon povrede.",
    category: "ortoze za vrat",
  },
  {
    id: 7,
    title: "kratka-braon-perika2",
    image_url: "/assets/images/barbara.jpg",
    description: "Perika kratka braon",
    category: "perike",
  },
  {
    id: 8,
    title: "kratka-plava-perika2",
    image_url: "/assets/images/diana.jpg",
    description: "Perika kratka plava",
    category: "perike",
  },
  {
    id: 9,
    title: "steznik3",
    image_url: "/assets/images/steznik-za-koleno.jpg",
    description:
      "Steznik za koleno je medicinski uređaj koji se koristi za pružanje podrške, stabilnosti i kompresije zglobu koljena.",
    category: "steznici za koleno",
  },
  {
    id: 10,
    title: "ortoza-za-vrat3",
    image_url: "/assets/images/ortoza-za-vrat.jpg",
    description:
      "Ortoza za vrat je medicinski uređaj dizajniran da pruži podršku i stabilnost vratu. Koristi se u terapeutske svrhe kako bi se smanjila bol, ograničila pokretljivost ili podržao proces ozdravljenja nakon povrede.",
    category: "ortoze za vrat",
  },
  {
    id: 11,
    title: "kratka-braon-perika3",
    image_url: "/assets/images/barbara.jpg",
    description: "Perika kratka braon",
    category: "perike",
  },
  {
    id: 12,
    title: "kratka-plava-perika3",
    image_url: "/assets/images/diana.jpg",
    description: "Perika kratka plava",
    category: "perike",
  },
  {
    id: 13,
    title: "steznik4",
    image_url: "/assets/images/steznik-za-koleno.jpg",
    description:
      "Steznik za koleno je medicinski uređaj koji se koristi za pružanje podrške, stabilnosti i kompresije zglobu koljena.",
    category: "steznici za koleno",
  },
  {
    id: 14,
    title: "ortoza-za-vrat4",
    image_url: "/assets/images/ortoza-za-vrat.jpg",
    description:
      "Ortoza za vrat je medicinski uređaj dizajniran da pruži podršku i stabilnost vratu. Koristi se u terapeutske svrhe kako bi se smanjila bol, ograničila pokretljivost ili podržao proces ozdravljenja nakon povrede.",
    category: "ortoze za vrat",
  },
  {
    id: 15,
    title: "kratka-braon-perika4",
    image_url: "/assets/images/barbara.jpg",
    description: "Perika kratka braon",
    category: "perike",
  },
  {
    id: 16,
    title: "kratka-plava-perika4",
    image_url: "/assets/images/diana.jpg",
    description: "Perika kratka plava",
    category: "perike",
  },
  {
    id: 17,
    title: "steznik5",
    image_url: "/assets/images/steznik-za-koleno.jpg",
    description:
      "Steznik za koleno je medicinski uređaj koji se koristi za pružanje podrške, stabilnosti i kompresije zglobu koljena.",
    category: "steznici za koleno",
  },
  {
    id: 18,
    title: "ortoza-za-vrat5",
    image_url: "/assets/images/ortoza-za-vrat.jpg",
    description:
      "Ortoza za vrat je medicinski uređaj dizajniran da pruži podršku i stabilnost vratu. Koristi se u terapeutske svrhe kako bi se smanjila bol, ograničila pokretljivost ili podržao proces ozdravljenja nakon povrede.",
    category: "ortoze za vrat",
  },
  {
    id: 19,
    title: "kratka-braon-perika5",
    image_url: "/assets/images/barbara.jpg",
    description: "Perika kratka braon",
    category: "perike",
  },
  {
    id: 20,
    title: "kratka-plava-perika5",
    image_url: "/assets/images/diana.jpg",
    description: "Perika kratka plava",
    category: "perike",
  },
  {
    id: 21,
    title: "steznik7",
    image_url: "/assets/images/steznik-za-koleno.jpg",
    description:
      "Steznik za koleno je medicinski uređaj koji se koristi za pružanje podrške, stabilnosti i kompresije zglobu koljena.",
    category: "steznici za koleno",
  },
  {
    id: 22,
    title: "ortoza-za-vrat7",
    image_url: "/assets/images/ortoza-za-vrat.jpg",
    description:
      "Ortoza za vrat je medicinski uređaj dizajniran da pruži podršku i stabilnost vratu. Koristi se u terapeutske svrhe kako bi se smanjila bol, ograničila pokretljivost ili podržao proces ozdravljenja nakon povrede.",
    category: "ortoze za vrat",
  },
  {
    id: 23,
    title: "kratka-braon-perika6",
    image_url: "/assets/images/barbara.jpg",
    description: "Perika kratka braon",
    category: "perike",
  },
  {
    id: 24,
    title: "kratka-plava-perika6",
    image_url: "/assets/images/diana.jpg",
    description: "Perika kratka plava",
    category: "perike",
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
