import { getProduct } from "@/products";
import styles from "./productPage.module.css";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

const Product = async ({ params }) => {
  const { title } = params;
  const product = await getProduct(title);

  return (
    <section className={styles.product__section}>
      <div className={`container ${styles.productPage__container}`}>
        <Link href="/" className={`button ${styles.button__back}`}>
          <div className="icon__wrapper">
            <Image src="/assets/icons/icon-arrow-left.svg" fill />
          </div>
          <span>Početna</span>
        </Link>

        <div className={styles.product__wrapper}>
          <div className={styles.product__imgWrapper}>
            <Image src={product.image_url} fill alt="product description" />
          </div>
          <div className={styles.product__content}>
            <h1 className={styles.product__title}>{product.title}</h1>
            <p className={styles.product__description}>{product.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
