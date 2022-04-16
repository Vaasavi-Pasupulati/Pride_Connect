import styles from "../styles/PackageList.module.css";
import TourCard from "./TourCard";

const PackageList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>TOUR PACKAGES FOR EVERYONE</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
      </div>
    </div>
  );
};

export default PackageList;
