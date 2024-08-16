import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.copyright}>
                <p>Copyright © 2024 Dekoratornia Olszynka Barbara Pelka</p>
                <p>Email:  
                    <a href="mailto:dekoratornia.olszynka@gmail.com">dekoratornia.olszynka@gmail.com</a>    
                </p>
                
            </div>
            <div className={styles.social}>
                <ul>
                    <li><a id='socFb' aria-label='Lint to facebook' className={styles.fb} href='https://www.facebook.com/profile.php?id=61557608729241'>
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a></li>
                    <li><a  id='socInsta' aria-label='lint to instagram' className={styles.insta} href='https://www.instagram.com/dekoratorniaolszynka/'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;