import About from "../../view/Aboout/About";
import Contact from "../../view/Contact/Contact";
import Header from "../../view/Header/Header";
import Portfolio from "../../view/Portfolio/Portfolio";
import styles from './Home.module.scss';

const Home = () => {
    return(
        <div className={styles.wrapper}>
            <Header />
            <About />
            <Portfolio />
            <Contact />
        </div>
    );
};

export default Home;