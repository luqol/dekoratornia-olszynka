import About from "../../view/Aboout/About";
import Header from "../../view/Header/Header";
import Portfolio from "../../view/Portfolio/Portfolio";
import styles from './Home.module.scss';

const Home = () => {
    return(
        <div className={styles.wrapper}>
            <Header />
            <About />
            <Portfolio />
        </div>
    );
};

export default Home;