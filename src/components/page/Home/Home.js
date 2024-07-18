import About from "../../view/Aboout/About";
import Header from "../../view/Header/Header";
import styles from './Home.module.scss';

const Home = () => {
    return(
        <div className={styles.wrapper}>
            <Header />
            <About />
        </div>
    );
};

export default Home;