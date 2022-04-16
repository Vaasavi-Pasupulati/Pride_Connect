import styles from "../styles/TourCard.module.css";
import Image from "next/image";

const TourCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pelling.JPG" alt="" width="500" height="500" />
      <h1 className={styles.title}>PELLING</h1>
      <span className={styles.price}>Rs 3000</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      Tour packages
    </div>
  );
};

export default TourCard;
