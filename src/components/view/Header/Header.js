import styles from './Header.module.scss'
;
const Header = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
                <img alt='logoHeader' src='/images/headerLogo.webp' />
            </div>
            <div className={styles.titleWrapper}>
                <h1 className={styles.title}>Dekoratornia</h1>
                <h1 className={styles.title}>Olszynka</h1>
                <p className={styles.subtitle}>gdzie pasja i miłość do rzemiosła splatają się</p>
                <p className={styles.subtitle}>w niezwykłe dzieła sztuki.</p>
            </div>
        </div>
    );
};

export default Header;