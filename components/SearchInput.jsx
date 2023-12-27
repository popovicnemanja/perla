import styles from "./searchinput.module.css";

const SearchInput = () => {
  return (
    <div className={styles.__wrapper}>
      <input
        type="text"
        name="search"
        className={styles.__input}
        placeholder="Brzo pretraživanje..."
      />
    </div>
  );
};

export default SearchInput;
