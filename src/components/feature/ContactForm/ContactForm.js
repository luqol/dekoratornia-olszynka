import { useState } from 'react';
import Button from '../../common/Button/Button';
import styles from './ContactForm.module.scss';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    const formHandler = (e) => {
        e.preventDefault();
        
        const templateParams = {
            from_name: name,
            message: msg,
            reply_to: email
        };

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID, 
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
            templateParams, 
            process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then((result) => {
            console.log('Email sent: ', result.text);
        }, (error) => {
            console.error('Error sending email: ', error.text);
        });

    };
    return(
        <div className={styles.wrapper} onSubmit={formHandler}>
            <p className={styles.title}>Wypełnij formularz</p>
            <form className={styles.form}>
                <div className={styles.personalData}>
                    <div className={styles.dataWrapper}>
                        <label htmlFor='name'>Imię</label>
                        <input 
                            type='text' placeholder='Twoje imię' id='name' name='name' 
                            value={name} onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className={styles.dataWrapper}>
                        <label htmlFor='email'>E-mail</label>
                        <input 
                            type='email' placeholder='Zostaw e-mail, żebym mogła do Ciebie napisać!' id='email' name='email'
                            value={email} onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className={styles.msg}>
                    <label htmlFor='msg'> Wiadomość</label>
                    <textarea 
                        placeholder='Twoja wiadomość' id='msg' name='msg' rows={10}
                        value={msg} onChange={e => setMsg(e.target.value)}
                    />
                </div>
                <div className={styles.btnWrapper}>
                    <Button className={styles.btn}>Wyślij</Button>
                </div>

            </form>
        </div>
    );
};

export default ContactForm;