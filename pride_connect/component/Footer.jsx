import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src="/img/featured2.jpg"
          objectFit="cover"
          layout="fill"
          alt=""
        />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>WID RANGE OF TOUR PACKAGES FOR ALL</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>BOOK OUR PACKAGE</h1>
          <p className={styles.text}>
            Sikkim Manipal Institute of Technology
            <br /> Majitar, 737102
            <br /> (123) 456-7890
          </p>

          <p className={styles.text}>
            Sikkim Manipal Institute of Technology
            <br /> Majitar, 737102
            <br /> (123) 456-7890
          </p>

          <p className={styles.text}>
            Sikkim Manipal Institute of Technology
            <br /> Majitar, 737102
            <br /> (123) 456-7890
          </p>

          <p className={styles.text}>
            Sikkim Manipal Institute of Technology
            <br /> Majitar, 737102
            <br /> (123) 456-7890
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
