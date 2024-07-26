import Button from '../../common/Button/Button';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
    return(
        <div className={styles.wrapper}>
            <p className={styles.title}>Wypełnij formularz</p>
            <form className={styles.form}>
                <div className={styles.personalData}>
                    <div className={styles.dataWrapper}>
                        <label htmlFor='name'>Imię</label>
                        <input type='text' placeholder='Twoje imię' id='name' name='name'/>
                    </div>
                    <div className={styles.dataWrapper}>
                        <label htmlFor='email'>E-mail</label>
                        <input type='email' placeholder='Zostaw e-mail, żebym mogła do Ciebie napisać!' id='email' name='email'/>
                    </div>
                </div>
                <div className={styles.msg}>
                    <label htmlFor='msg'> Wiadomość</label>
                    <textarea placeholder='Twoja wiadomość' id='msg' name='msg' rows={10}/>
                </div>
                <div className={styles.btnWrapper}>
                    <Button className={styles.btn}>Wyślij</Button>
                </div>

            </form>
        </div>
    );
};

export default ContactForm;