import ContactForm from '../../feature/ContactForm/ContactForm';
import styles from './Contact.module.scss';

const Contact = () => {
    return(
        <div className={styles.wrapper} id='contact'>
            <div className={styles.header}>
                <img alt='contactHeader' src={`/images/contact.webp`} />
                <div className={styles.title}>
                    <h2>Napisz do mnie</h2>
                </div>
            </div>
            <ContactForm />
        </div>
    );
};

export default Contact;