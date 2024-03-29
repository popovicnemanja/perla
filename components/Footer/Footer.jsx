import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__container}`}>
        <div className={styles.footer__content}>
          <div className={`${styles["footer__content"]}`}>
            <p>Copyright &copy; 2024 Perla. All rights reserved.</p>
          </div>
          <div className={`${styles["footer__content--centered"]}`}>
            Web development by
            <Link
              className={styles.developer__link}
              href="https://nemanjapopovic.web.app/"
              target="_blank"
            >
              Nemanja
            </Link>
          </div>
          <div className="footer__content-item">
            <ul className={styles.socials__list}>
              <li className={`${styles["socials__list-item"]}`}>
                <Link href="viber://contact?number=%2B381641721272">
                  <Image
                    src="/assets/icons/icon-viber.svg"
                    alt="viber"
                    width={30}
                    height={30}
                  />
                </Link>
              </li>
              <li className={`${styles["socials__list-item"]}`}>
                <Link
                  href="https://www.facebook.com/profile.php?id=100063902981595"
                  target="_blank"
                >
                  <Image
                    src="/assets/icons/icon-facebook.svg"
                    alt="facebook"
                    width={30}
                    height={30}
                  />
                </Link>
              </li>
              <li className={`${styles["socials__list-item"]}`}>
                <Link href="https://wa.me/381641721272">
                  <Image
                    src="/assets/icons/icon-whatsapp.svg"
                    alt="whatsapp"
                    width={30}
                    height={30}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
