import Image from "next/image";
import Link from "next/link";
import styles from "./productcard.module.css";

const ProductCard = ({ product }) => {
  return (
    <li role="listitem" className={styles.product}>
      <Link href={`/proizvodi/${product.title}`} className="product__link">
        <div className={`${styles["product__image--wrapper"]}`}>
          <Image
            src={product.image_url}
            fill
            alt={product.description}
            sizes="(min-width: 780px) 300px, 140px"
          />
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
