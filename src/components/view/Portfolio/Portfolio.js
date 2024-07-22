import PortfolioForm from '../../feature/PortfolioForm/PortfolioForm';
import styles from './Portfolio.module.scss';

const Portfolio = () => {
    return(
        <div className={styles.wrapper} id='portfolio'>
            <h2 className={styles.title}>Moje portfolio</h2>
            <p className={styles.description}>Odkryj nasze wyjątkowe dzieła sztuki, ręcznie tworzone ozdoby świąteczne, renowacje figur oraz precyzyjne kopie najpiękniejszych obrazów - w Dekoratorni Olszynka znajdziesz inspirację dla swojego wnętrza!</p>
            <PortfolioForm />
        </div>
    );
};

export default Portfolio;