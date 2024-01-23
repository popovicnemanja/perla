import styles from "./pagination.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className={styles.pagination__wrapper}>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          disabled={currentPage === page}
          className={`${styles.pagination__btn} ${
            currentPage === page ? styles.disabled : ""
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
