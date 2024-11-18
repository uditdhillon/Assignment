import Link from 'next/link';
import styles from '../styles/Featured.module.css';

export default function Featured() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.logo}>MangaStore</div>
                <nav>
                    <ul className={styles.navLinks}>
                        <li><Link href="assig5\app\page.js">Home</Link></li>
                        <li><Link href="assig5\app\about\page.js">About</Link></li>
                        <li><Link href="assig5\app\contact\page.js">Contact</Link></li>
                    </ul>
                </nav>
            </header>

            <main className={styles.main}>
                <h1 className={styles.title}>Featured Manga</h1>
                <p className={styles.description}>
                    Explore our handpicked selection of the most popular and trending manga books.
                </p>
                <div className={styles.mangaGrid}>
                    <div className={styles.mangaCard}>
                        <img src="/manga1.jpg" alt="Naruto" />
                        <h3>Naruto</h3>
                        <p>$9.99</p>
                        <button className={styles.buyButton}>Buy Now</button>
                    </div>
                    <div className={styles.mangaCard}>
                        <img src="/manga2.jpg" alt="One Piece" />
                        <h3>One Piece</h3>
                        <p>$12.99</p>
                        <button className={styles.buyButton}>Buy Now</button>
                    </div>
                    <div className={styles.mangaCard}>
                        <img src="/manga3.jpg" alt="Attack on Titan" />
                        <h3>Attack on Titan</h3>
                        <p>$14.99</p>
                        <button className={styles.buyButton}>Buy Now</button>
                    </div>
                    <div className={styles.mangaCard}>
                        <img src="/manga4.jpg" alt="Demon Slayer" />
                        <h3>Demon Slayer</h3>
                        <p>$10.99</p>
                        <button className={styles.buyButton}>Buy Now</button>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 MangaStore. All rights reserved.</p>
            </footer>
        </div>
    );
}
