import { useState } from "react";
import styles from "./searchinput.module.css";
import { searchProducts } from "@/products.js";
import Link from "next/link";
import Image from "next/image";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearchChange = async (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value.length >= 3) {
      const filtered = await searchProducts(value);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <div className={styles.searchInput__wrapper}>
      <input
        type="text"
        name="search"
        className={styles.searchInput__input}
        placeholder="Brzo pretraživanje..."
        onChange={handleSearchChange}
        value={searchValue}
      />
      {searchValue.length >= 3 ? (
        <ul role="list" className={styles.search__list}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <li key={product.id} className={styles.search__item}>
                <Link
                  href={`/proizvodi/${product.title}`}
                  onClick={() => setSearchValue("")}
                  className={`${styles["search__item--link"]}`}
                >
                  <div className={`${styles["search__item--thumbnail"]}`}>
                    <Image src={product.image_url} alt={product.title} fill className={styles.thumbnail__img}/>
                  </div>
                  <p className={`${styles["search__item--title"]}`}>
                    {product.title.replace(/-/g, " ")}
                  </p>
                </Link>
              </li>
            ))
          ) : (
            <p className={`${styles["search__error"]}`}>
              Nema rezultata za vašu pretragu proizvoda.
            </p>
          )}
        </ul>
      ) : null}
    </div>
  );
};

export default SearchInput;
