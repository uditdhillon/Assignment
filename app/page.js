import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Manga Store</title>
        <meta name="description" content="Explore a vast collection of manga books and get your favorites today!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>MangaStore</div>
        <nav>
          <ul className={styles.navLinks}>
            <li><a href="/about">About</a></li>
            <li><a href="/featured">Featured</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Welcome to MangaStore!</h1>
          <p className={styles.description}>
            Discover and shop the latest and most popular manga books. Dive into your favorite stories today.
          </p>
          <a href="#featured" className={styles.ctaButton}>Shop Now</a>
        </section>

        <section id="featured" className={styles.featured}>
          <h2>Featured Manga</h2>
          <div className={styles.mangaGrid}>
            <div className={styles.mangaCard}>
              <img src="/manga1.jpg" alt="Manga 1" />
              <h3>Naruto</h3>
              <p>$9.99</p>
            </div>
            <div className={styles.mangaCard}>
              <img src="/manga2.jpg" alt="Manga 2" />
              <h3>One Piece</h3>
              <p>$12.99</p>
            </div>
            <div className={styles.mangaCard}>
              <img src="/manga3.jpg" alt="Manga 3" />
              <h3>Attack on Titan</h3>
              <p>$14.99</p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 MangaStore. All rights reserved.</p>
      </footer>
    </div>
  );
}
