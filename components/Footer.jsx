import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>AVOCADO CREATIVES.</h1>
        <h1 className={styles.linkTitle}>
          <a className={styles.link} href="/contact">
            <span className={styles.linkText}>WORK WITH US</span>
            <Image src="/img/link.png" width="40px" height="40px" alt="link" />
          </a>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          12 ADAM STREET NY <br /> USA
        </div>
        <div className={styles.cardItem}>
          CONTACT@XYZ.COM <br /> 111 111 1111
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          FOLLOW US:
          <br /> __FB __IN __BE __TW
        </div>
        <div className={styles.cardItem}>
          © 2022 XYZ INTERACTIVE,
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
