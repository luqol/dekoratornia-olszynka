import styles from './Header.module.scss'
;
const Header = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
                <img alt='logoHeader' src='/images/headerLogo.png' />
            </div>
        </div>
    );
};

export default Header;