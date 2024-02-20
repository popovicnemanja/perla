import Image from "next/image";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={`main ${styles.hero__section}`}>
      <div className={`container ${styles.hero__container}`}>
        <div className={`flex__wrapper ${styles.hero__flex}`}>
          <div className={styles.hero__content}>
            <h1 className={styles.hero__title}>Perla</h1>
            <div className={`${styles["hero__desc-wrapper"]}`}>
              <p>
                Otkrijte svet udobnosti i brige o vašem zdravlju u našoj
                prodavnici ortopedskih pomagala.
              </p>
            </div>
          </div>
          <div className={`img__wrapper ${styles["hero__img--wrapper"]}`}>
            <Image
              src="/assets/images/hero_img.png"
              alt="A woman holds the hand of a man in a wheelchair mobile version"
              fill
              sizes="(min-width: 900px) 485px, (min-width: 440px) 387px, calc(82.5vw + 41px)"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
