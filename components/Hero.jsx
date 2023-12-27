import Image from "next/image";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.hero__container}`}>
        <div className={styles.hero__flex}>
          <div className={styles.hero__content}>
            <h1 className={styles.hero__title}>Perla</h1>
            <div className={`${styles["hero__desc-wrapper"]}`}>
              <p>
                Otkrijte svet udobnosti i brige o vašem zdravlju u našoj
                prodavnici ortopedskih pomagala.
              </p>
            </div>
          </div>
          <div className="hero__img--wrapper">
            <Image
              src="/assets/images/hero_img-mobile.png"
              alt="A woman holds the hand of a man in a wheelchair mobile version"
              width={387}
              height={471}
              className={`${styles["hero__img-mobile"]}`}
            />
            <Image
              src="/assets/images/hero__img-desktop.png"
              alt="A woman holds the hand of a man in a wheelchair desktop version"
              width={540}
              height={563}
              className={`${styles["hero__img-desktop"]}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
