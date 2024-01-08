import Image from "next/image";
import Link from "next/link";
import styles from "./productcard.module.css";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/proizvodi/${product.title}`} className="product__link">
      <li className={styles.product}>
        <div className={`${styles["product__image--wrapper"]}`}>
          <Image
            src={product.image_url}
            fill
            alt={product.description}
            sizes="(min-width: 780px) 300px, 140px"
          />
        </div>
      </li>
    </Link>
  );
};

export default ProductCard;
