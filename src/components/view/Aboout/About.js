import styles from './About.module.scss';

const About = () => {
    return(
       <div className={styles.wrapper} id='about'>
            <h2 className={styles.title}>Czym się zajmuję?</h2>

            <div className={styles.gallery}>
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

            <div className={styles.desriptionWrapper}>
                <div className={styles.description}>
                    <h2 className={styles.desTitle}>Nasza oferta to niezrównane doznania dla Twojego domu</h2>
                    <p className={styles.desBody}>
                    Poszukujesz wyjątkowych ozdób świątecznych, które rozświetlą Twoje wnętrza? Nasze ręcznie tworzone dzieła sztuki to kwintesencja świątecznego magicznego blasku, które wprowadzą do Twojego domu niepowtarzalną atmosferę pełną ciepła i radości.
                    </p>
                    <p className={styles.desBody}>
                    A może pragniesz przywrócić dawny blask swoim ukochanym figurkom? W Dekoratorni Olszynka z pasją renowujemy każdy detal, dbając o to, aby Twoje ulubione przedmioty znów mogły błyszczeć w pełnej krasie.
                    </p>
                    <p className={styles.desBody}>
                    Nie zapominamy również o miłośnikach sztuki - nasze precyzyjne kopie najpiękniejszych obrazów to niepowtarzalna szansa, aby cieszyć się arcydziełami w swoim własnym domowym zaciszu.
                    </p>
                    <p className={styles.desBody}>
                    Dołącz do naszej rodziny klientów, którzy już od lat czerpią radość z naszych unikalnych usług. Dekoratornia Olszynka - twoje marzenia o pięknie wnętrz stają się rzeczywistością.
                    </p>
                    <a href='#contact'>Skontaktuj sie!</a>
                </div>
                <div className={styles.imgWrapper}>
                    <img alt='Szyszki' src='/images/szyszki.png' />
                </div>
            </div>
       </div>
    );
};

export default About;