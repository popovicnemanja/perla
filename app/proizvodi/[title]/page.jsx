import { getProduct } from "@/products";
import styles from "./productPage.module.css";
import Image from "next/image";
import Link from "next/link";

const Product = async ({ params }) => {

  const { title } = params;
  const product = await getProduct(title);
  const decodedTitle = decodeURIComponent(title);
  const formattedTitle = decodedTitle.replace(/-/g, " ");

  return (
    <section className={`main ${styles.product__section}`}>
      <div className={`container ${styles.productPage__container}`}>
        <Link href="/#products__list" className={`button ${styles.button__back}`}>
          <div className="icon__wrapper">
            <Image
              src="/assets/icons/icon-arrow-left.svg"
              fill
              alt="previous page"
            />
          </div>
          <span>Prethodna</span>
        </Link>

        <div className={styles.product__wrapper}>
          <div className={styles.product__imgWrapper}>
            <Image
              src={product.image_url}
              fill
              alt={product.title}
              sizes="320px"
              className={styles.product__img}

            />
          </div>
          <div className={styles.product__content}>
            <h1 className={styles.product__title}>{formattedTitle}</h1>
            <p className={styles.product__description}>{product.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
