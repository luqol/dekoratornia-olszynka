import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.copyright}>
                <p>Copyright © 2024 Dekoratornia Olszynka Barbara Pelka</p>
            </div>
            <div className={styles.social}>
                <ul>
                    <li><a className={styles.fb} href='#facebook'>
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a></li>
                    <li><a className={styles.insta} href='#instagram'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;