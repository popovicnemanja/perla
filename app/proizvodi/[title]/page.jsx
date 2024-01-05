import { getProduct } from "@/products";
import styles from "./productPage.module.css";
import Image from "next/image";

const Product = async ({ params }) => {
  const { title } = params;
  const product = await getProduct(title);

  return (
    <section className={styles.product__section}>
      <div className={`container ${styles.product__container}`}>
        <div className={styles.product__imgWrapper}>
          <Image src={product.image_url} fill alt="product description" />
        </div>
        <div className={styles.product__content}>
          <h1 className={styles.product__title}>{product.title}</h1>
          <p className={styles.product__description}>{product.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Product;
