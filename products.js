const products = [
  {
    id: 1,
    title: "Štitnik nosa",
    image_url: "/assets/images/ortoze-pojasevi-mideri/stitnik-nosa.png",
    description: "Štitnik nosa",
    category: "kolica",
  },
  {
    id: 2,
    title: "mehanička-kolica",
    image_url: "/assets/images/kolica/mehanička-kolica.png",
    description: "Štitnik nosa",
    category: "kolica",
  },
  {
    id: 3,
    title: "Trudnički pojas",
    image_url: "/assets/images/ortoze-pojasevi-mideri/trudnicki-pojas.png",
    description: "Trudnički pojas",
    category: "mideri",
  },

  {
    id: 4,
    title: "elektromotorna-kolica",
    image_url: "/assets/images/kolica/elektromotorna-kolica.png",
    description: "Elektromotorna Kolica",
    category: "kolica",
  },
  {
    id: 5,
    title: "elektromotorna-kolica2",
    image_url: "/assets/images/kolica/elektromotorna-kolica2.png",
    description: "Elektromotorna Kolica",
    category: "kolica",
  },
  {
    id: 6,
    title: "kolica",
    image_url: "/assets/images/kolica/kolica.png",
    description: "Elektromotorna Kolica",
    category: "kolica",
  },
  {
    id: 7,
    title: "aktivna-kolica",
    image_url: "/assets/images/kolica/laka-aktivna-kolica.png",
    description: "Elektromotorna Kolica",
    category: "kolica",
  },
  {
    id: 8,
    title: "Longeta za koleno",
    image_url: "/assets/images/ortoze-pojasevi-mideri/longeta-za-koleno.png",
    description: "Longeta za koleno",
    category: "ortoze za koleno, zglob, stopalo",
  },
  {
    id: 9,
    title: "Lumbalni-mider",
    image_url: "/assets/images/ortoze-pojasevi-mideri/lumbalni-mider.png",
    description: "Lumbalni mider",
    category: "mideri",
  },
  {
    id: 10,
    title: "Meka-kragna",
    image_url: "/assets/images/ortoze-pojasevi-mideri/meka-kragna.png",
    description: "Meka kragna za vrat",
    category: "ortoze za vrat",
  },
  {
    id: 11,
    title: "Mitela",
    image_url: "/assets/images/ortoze-pojasevi-mideri/mitela.png",
    description: "Mitela",
    category: "ortoze za rame, lakat, ručni zglob",
  },
  {
    id: 12,
    title: "Noćna ortoza-za-čukljeve",
    image_url:
      "/assets/images/ortoze-pojasevi-mideri/noćna-ortoza-za-čukljeve.png",
    description: "Noćna ortoza za čukljeve",
    category: "ortoze za koleno, zglob, stopalo",
  },
  {
    id: 13,
    title: "Okovratnik-Tomas",
    image_url: "/assets/images/ortoze-pojasevi-mideri/okovratnik-tomas.png",
    description: "Okovratnik",
    category: "ortoze za vrat",
  },
  {
    id: 14,
    title: "Okovratnik",
    image_url: "/assets/images/ortoze-pojasevi-mideri/okovratnik.png",
    description: "Elektromotorna Kolica",
    category: "ortoze za vrat",
  },
  {
    id: 15,
    title: "Ortoza-ručnog-zgloba",
    image_url:
      "/assets/images/ortoze-pojasevi-mideri/ortoza-ručnog-zgloba.png",
    description: "Ortoza-ručnog-zgloba",
    category: "ortoza za rame, lakat, ručni zglob",
  },
  {
    id: 16,
    title: "Ortoza-za-palac",
    image_url: "/assets/images/ortoze-pojasevi-mideri/ortoza-za-palac.png",
    description: "Ortoza za palac",
    category: "ortoza za rame, lakat, ručni zglob",
  },
  {
    id: 17,
    title: "Peronalna-ortoza",
    image_url: "/assets/images/ortoze-pojasevi-mideri/peronalna-ortoza.png",
    description: "Peronalna ortoza",
    category: "ortoze za koleno, zglob, stopalo",
  },
  {
    id: 18,
    title: "Postoperativni-mider",
    image_url:
      "/assets/images/ortoze-pojasevi-mideri/postoperativni-mider.png",
    description: "Postoperativni mider",
    category: "mideri",
  },
  {
    id: 19,
    title: "Rehab-kolena",
    image_url: "/assets/images/ortoze-pojasevi-mideri/rehab-kolena.png",
    description: "Rehab kolena",
    category: "ortoze za koleno, zglob, stopalo",
  },
  {
    id: 20,
    title: "Steznik-za-grudni-koš",
    image_url:
      "/assets/images/ortoze-pojasevi-mideri/steznik-za-grudni-koš.png",
    description: "Elektromotorna Kolica",
    category: "ortoze za kičmu",
  },
  {
    id: 21,
    title: "Steznik-za-pravilno-držanje-ramena",
    image_url:
      "/assets/images/ortoze-pojasevi-mideri/steznik-za-pravilno-držanje-ramena.png",
    description: "Steznik za pravilno držanje ramena",
    category: "ortoze za rame, lakat, ručni zglob",
  },
  {
    id: 22,
    title: "Steznik-za-ruku",
    image_url: "/assets/images/ortoze-pojasevi-mideri/steznik-za-ruku.png",
    description: "Elektromotorna Kolica",
    category: "kolica",
  },
  {
    id: 23,
    title: "Aktivna-invalidska-kolica",
    image_url: "/assets/images/kolica/aktivna-invalidska-kolica.png",
    description: "Lagana aluminijumska Aktivna kolica",
    category: "kolica",
  },

  {
    id: 24,
    title: "Torakolumbalni-mider",
    image_url:
      "/assets/images/ortoze-pojasevi-mideri/torakolumbalni-mider.png",
    description: "Torakolumbalni mider",
    category: "mideri",
  },
  {
    id: 25,
    title: "Dečija-kolica",
    image_url: "/assets/images/kolica/dečija-kolica.png",
    description: "Dečija kolica",
    category: "kolica",
  },
  {
    id: 26,
    title: "hodalica-podlaktna",
    image_url: "/assets/images/štake-hodalice/hodalica-podlaktna.png",
    description: "Hodalica podlaktna",
    category: "hodalice, stake",
  },
  {
    id: 27,
    title: "hodalica-sa-dva-točka",
    image_url: "/assets/images/štake-hodalice/hodalica-sa-dva-točka.png",
    description: "Hodalica sa dva točka",
    category: "hodalice, stake",
  },
  {
    id: 28,
    title: "hodalica",
    image_url: "/assets/images/štake-hodalice/hodalica.png",
    description: "Hodalica",
    category: "hodalice, stake",
  },
  {
    id: 29,
    title: "Štake-podlaktne",
    image_url: "/assets/images/štake-hodalice/štake-podlaktne.png",
    description: "Štake podlaktne",
    category: "hodalice, stake",
  },
  {
    id: 30,
    title: "Štake-podpazusne",
    image_url: "/assets/images/štake-hodalice/štake-podpazusne.png",
    description: "Štake podpazusne",
    category: "hodalice, stake",
  },
  {
    id: 31,
    title: "Štap sklopivi",
    image_url: "/assets/images/štake-hodalice/štap-sklopivi.png",
    description: "Štap sklopivi",
    category: "hodalice, stake",
  },
  {
    id: 32,
    title: "Nastavak-sa-poklopcem",
    image_url: "/assets/images/toaletni-program/nastavak-sa-poklopcem.png",
    description: "Nastavak sa poklopcem",
    category: "toaletni program",
  },
  {
    id: 33,
    title: "Nastavak-za-wc",
    image_url: "/assets/images/toaletni-program/nastavak-za-wc.png",
    description: "Nastavak za wc",
    category: "toaletni program",
  },
  {
    id: 34,
    title: "Sedište-za-kadu2",
    image_url: "/assets/images/toaletni-program/sedište-za-kadu2.png",
    description: "Sedište za kadu",
    category: "toaletni program",
  },
  {
    id: 35,
    title: "Toaletna-kolica",
    image_url: "/assets/images/toaletni-program/toaletna-kolica.png",
    description: "Sedište za kadu",
    category: "toaletni program",
  },
  {
    id: 36,
    title: "Toaletna-stolica-sa-točkićima",
    image_url: "/assets/images/toaletni-program/toaletna-stolica-sa-točkićima.png",
    description: "Toaletna stolica sa točkićima",
    category: "toaletni program",
  },
  {
    id: 37,
    title: "Sedište-za-kadu",
    image_url: "/assets/images/toaletni-program/sedište-za-kadu.png",
    description: "Sedište za kadu",
    category: "toaletni program",
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
