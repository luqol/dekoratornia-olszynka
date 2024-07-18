import styles from './About.module.scss';

const About = () => {
    return(
       <div className={styles.wrapper}>
            <h2 className={styles.title}>Czym się zajmuję?</h2>
            <div className={styles.row}>
                <div className={styles.box}>
                    <img alt='Renowacje figur' src='/images/about1.png' />
                    <p className={styles.subtitle}>Renowacja figur</p>
                </div>
                <div className={styles.box}>
                    <img alt='Kopie obrazow' src='/images/about2.png' />
                    <p className={styles.subtitle}>Kopie obrazów</p>
                </div>
                <div className={styles.box}>
                    <img alt='Ręczne dekoracje' src='/images/about3.png' />
                    <p className={styles.subtitle}>Ręczne wykonywanie dekoracji</p>
                </div>
            </div>
       </div>
    );
};

export default About;