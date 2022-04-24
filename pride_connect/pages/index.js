import Head from "next/head";
import Image from "next/image";
import Featured from "../component/Featured";
import TourCard from "../component/TourCard";
import styles from "../styles/Home.module.css";
import PackageList from "../component/PackageList";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pride Connect</title>
        <meta name="description" content="Budget friendly travel app!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PackageList />

      {/* <Image src="/img/sikkimlake.jpg" alt="" /> */}
    </div>
  );
}
