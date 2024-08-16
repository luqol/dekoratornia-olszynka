import styles from "./NavBar.module.scss"
import Button from '../../common/Button//Button';
import { useState } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {

    const [visible, setVisible] = useState(false);


    const menuHandler = e => {
        e.preventDefault();
        setVisible(!visible);
    };

    const scrollToSection = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('data-target');
        if (targetId === '#home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setVisible(false);
    };

    const imgHandler = () => {
        window.location.reload();
    };

    return(
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <div className={styles.imgWrapper} onClick={imgHandler}>
                    <img alt="Dekoratornia Olszynka" src="/images/logo.png" />
                </div>
            </div>
            <div className={styles.menuWrapper}>
                <div className={styles.btnHandler}>
                    <Button id='hamburger' aria-label='mobile hamburger' className={styles.btn} action={menuHandler}> 
                        <FontAwesomeIcon icon={faBars} />
                    </Button>
                </div>
                <div className={clsx(styles.menu, { [styles.show]: visible} ) }>
                    <ul>
                        <li><a href="/" data-target="#home" onClick={scrollToSection}>Strona główna</a></li>
                        <li><a href="/" data-target="#about" onClick={scrollToSection}>O mnie</a></li>
                        <li><a href="/" data-target="#portfolio" onClick={scrollToSection}>Portfolio</a></li>
                        <li><a href="/" data-target="#contact" onClick={scrollToSection}>Kontakt</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;