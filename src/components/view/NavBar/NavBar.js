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

    const linkHandle = () => {
        setVisible(false);
    };
    return(
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <div className={styles.imgWrapper}>
                    <img alt="Dekoratornia Olszynka" src="/images/logo.png" />
                </div>
            </div>
            <div className={styles.menuWrapper}>
                <Button action={menuHandler}> 
                    <FontAwesomeIcon icon={faBars} />
                </Button>
                <div className={clsx(styles.menu, { [styles.show]: visible} ) }>
                    <ul>
                        <li><a href="#home" onClick={linkHandle}>Home</a></li>
                        <li><a href="#about" onClick={linkHandle}>About</a></li>
                        <li><a href="#portfolio" onClick={linkHandle}>Portfolio</a></li>
                        <li><a href="#contact" onClick={linkHandle}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;