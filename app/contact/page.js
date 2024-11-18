import Link from 'next/link';
import styles from '../styles/Contact.module.css';

export default function Contact() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.logo}>MangaStore</div>
                <nav>
                    <ul className={styles.navLinks}>
                        <li><Link href="assig5\app\page.js">Home</Link></li>
                        <li><Link href="assig5\app\about\page.js">About</Link></li>
                        <li><Link href="assig5\app\featured\page.js">Featured</Link></li>
                    </ul>
                </nav>
            </header>

            <main className={styles.main}>
                <h1 className={styles.title}>Contact Us</h1>
                <p className={styles.description}>
                    We’d love to hear from you! Whether you have a question, feedback, or just want to chat about manga, feel free to reach out.
                </p>
                <form className={styles.contactForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your name" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your email" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" placeholder="Your message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className={styles.submitButton}>Send Message</button>
                </form>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 MangaStore. All rights reserved.</p>
            </footer>
        </div>
    );
}
