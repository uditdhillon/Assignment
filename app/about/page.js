import Link from 'next/link';
import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.logo}>MangaStore</div>
                <nav>
                    <ul className={styles.navLinks}>
                        <li><Link href="assig5\app\page.js">Home</Link></li>
                        <li><Link href="assig5\app\featured\page.js">Featured</Link></li>
                        <li><Link href="assig5\app\contact\page.js">Contact</Link></li>
                    </ul>
                </nav>
            </header>

            <main className={styles.main}>
                <h1 className={styles.title}>About MangaStore</h1>
                <p className={styles.description}>
                    MangaStore is your one-stop shop for all things manga. Whether you're a die-hard fan or a newcomer, we offer a curated selection of manga books from the latest releases to timeless classics.
                </p>
                <p className={styles.mission}>
                    Our mission is to bring the best stories to life for readers around the globe. Dive into the worlds of action, romance, fantasy, and more. We are passionate about connecting manga enthusiasts to the stories that inspire and excite them.
                </p>
                <p className={styles.cta}>
                    Ready to explore? <Link href="/">Return to Home</Link> and start browsing our collection!
                </p>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 MangaStore. All rights reserved.</p>
            </footer>
        </div>
    );
}
