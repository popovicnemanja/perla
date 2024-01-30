const products = [
  {
    id: 1,
    title: "aktivna-invalidska-kolica",
    image_url: "/assets/images/kolica/aktivna-invalidska-kolica.png",
    description: "Lagana aluminijumska Aktivna kolica",
    category: "kolica",
  },

  
  {
    id: 2,
    title: "dečija-kolica",
    image_url: "/assets/images/kolica/dečija-kolica.png",
    description: "Dečija kolica",
    category: "kolica",
  },
  {
    id: 3,
    title: "elektromotorna-kolica",
    image_url: "/assets/images/kolica/elektromotorna-kolica.png",
    description: "Elektromotorna Kolica",
    category: "kolica",
  },
  {
    id: 4,
    title: "elektromotorna-kolica2",
    image_url: "/assets/images/kolica/elektromotorna-kolica2.png",
    description: "Elektromotorna Kolica",
    category: "kolica",
  },
  {
    id: 5,
    title: "kolica",
    image_url: "/assets/images/kolica/kolica.png",
    description: "Elektromotorna Kolica",
    category: "kolica",
  },
  {
    id: 6,
    title: "aktivna kolica",
    image_url: "/assets/images/kolica/laka-aktivna-kolica.png",
    description: "Elektromotorna Kolica",
    category: "kolica",
  },
  {
    id: 7,
    title: "mehanička kolica",
    image_url: "/assets/images/kolica/mehanička-kolica.png",
    description: "Elektromotorna Kolica",
    category: "kolica",
  },
  {
    id: 25,
    title: "hodalica-podlaktna",
    image_url: "/assets/images/stake-hodalice/hodalica-podlaktna.png",
    description:
      "Hodalica podlaktna predstavlja idealno pomagalo za osobe koje se suočavaju sa smanjenom pokretljivošću. Ova sofisticirana pruža stabilnost i podršku korisnicima tokom hodanja, posebno fokusirajući se na podršku područja podlaktice. ",
    category: "hodalice, stake",
  },
];

export const getProducts = () => {
  return products;
};

export const getProduct = async (title) => {
  const decodedTitle = decodeURIComponent(title);
  return products.find((product) => product.title === decodedTitle);
};

export const searchProducts = async (searchValue) => {
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return filteredProducts;
};
