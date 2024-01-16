import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/styles.module.css";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mi primera chamba</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Mi primera chamba" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
      </Head>

      {/* Navbar */}
      <nav className={styles.navbar}>
        <a href="#" className={styles.navbarBrand}>
          Home
        </a>
        <ul className={styles.navbarNav}>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>
              Help
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>
              Log in
            </a>
          </li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <div className={styles.content}>
        <h1>Hola mundo cruel</h1>
      </div>
        
        {/* Footer */}
        <Footer />
    </div>
    
  );
}
