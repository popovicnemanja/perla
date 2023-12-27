import Image from "next/image";
import Link from "next/link";
import styles from "./productcard.module.css";

const ProductCard = ({ product }) => {
  return (
    <Link href="/" className="product__link">
      <li className={styles.product}>
        <Image
          className={styles["product__image--mobile"]}
          src={product.image_url_mobile}
          width={184}
          height={159}
          alt="Steznik mobilna verzija"
        />
        <Image
          className={styles["product__image--desktop"]}
          src={product.image_url_desktop}
          width={300}
          height={260}
          alt="Steznik desktop verzija"
        />
      </li>
    </Link>
  );
};

export default ProductCard;
