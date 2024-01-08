import styles from "./map.module.css";

const Map = () => {
  return (
    <div className={styles.map__container}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2223.5151553427913!2d19.839102578669195!3d43.85477243587053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759d3962fad41b9%3A0x71339afdbd6fd2bc!2sPERLA!5e0!3m2!1sen!2srs!4v1704374363093!5m2!1sen!2srs"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Map;
