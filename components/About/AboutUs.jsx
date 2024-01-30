import styles from "./aboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={`container section__container ${styles.about__container}`}>
      <h1 className="section__title">O Nama</h1>
      <div className={styles.about__wrapper}>
        <p className={styles.about__description}>
          Pravno lice STKR Perla je započelo sa radom 01.06.2000-godine i
          primarna delatnost je promet ortopedskih pomagala i medicinskih
          sredstava.
        </p>
        <p className={styles.about__description}>
          Stkr Perla je potpisnik Ugovora sa Republičkim fondom za zdravstveno
          osiguranje te svojim klijentima omogućava nabavku pomagala na osnovu
          naloga overenih od strane RFZO-a.
        </p>
        <p className={styles.about__description}>
          Svoju delatnost obavlja prvenstveno u zlatiborskom i moravičkom
          okrugu.
        </p>
        <p className={styles.about__description}>
          Kao poslovni partner različitih uvoznika i distributera koji su
          registrovali svoje proizvode u Srbiji i dobili rešenja o njihovoj
          distribuciji od strane Ministarstva zdravlja, imamo priliku da
          izaberemo najbolje i najpovoljnije proizvode koji će našim klijentima
          omogućiti bolji i kvalitetniji život kao i brži oporavak.
        </p>
        <p className={styles.about__description}>
          U asortimanu prodavnice se nalaze invalidska kolica, pomoćne sprave za
          kretanje, antidekubitalna pomagala, kućni medicinski aparati,
          ortopedske cipele i ulošci, ortoze za kičmu, perike, proteze dojke i
          ortopedski grudnjaci.
        </p>
        <p className={styles.about__description}>
          U svakom momentu izlazimo u susret pacijentima koji imaju posebne
          zahteve za narudžbinu kao i nemogućnost da nas posete lično..Terenske
          usluge ne naplaćujemo posebno.
        </p>
        <p className={styles.about__description}>
          Posebno se ponosimo velikim brojem zadovoljnih klijenata koji
          prepoznaju našu brigu, ljubaznost i odlučnost da im rešimo svaki
          problem koji smo u mogućnosti.
        </p>
        <p className={styles.about__description}>24 godina smo sa Vama!</p>
      </div>
    </div>
  );
};

export default AboutUs;
