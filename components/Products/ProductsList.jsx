import styles from "./productslist.module.css";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Steznik",
    image_url_mobile: "/assets/images/steznik_mobile.png",
    image_url_desktop: "/assets/images/steznik_desktop.png",
  },
  {
    id: 2,
    title: "Ortoza za vrat",
    image_url_mobile: "/assets/images/ortoza-za-vrat_mobile.png",
    image_url_desktop: "/assets/images/ortoza-za-vrat_desktop.png",
  },
  {
    id: 3,
    title: "Perila",
    image_url_mobile: "/assets/images/barbara_mobile.png",
    image_url_desktop: "/assets/images/barbara_desktop.png",
  },
];

const ProductsList = () => {
  return (
    <ul className={styles.products__list} role="list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductsList;
