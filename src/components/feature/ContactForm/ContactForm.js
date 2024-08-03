import { useState, useRef } from 'react';
import Button from '../../common/Button/Button';
import styles from './ContactForm.module.scss';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const [status, setStatus] = useState('hide'); // hide, success, fail
    const [honeypot, setHoneypot] = useState('');
    const [captchaValue, setCaptchaValue] = useState('');

    const recaptchaRef = useRef();

    const handleCaptcha = (value) => {
        setCaptchaValue(value);
        console.log("Captcha value:", value);
    };

    const formHandler = async (e) => {
        e.preventDefault();

        if(!name || !email || !msg || !!captchaValue){
            console.log('brak danych');
            return;
        }

        if (honeypot) {
            console.log('Bot detected');
            return; 
        }
        
        const templateParams = {
            from_name: name,
            message: msg,
            reply_to: email
        };

        try{
            const result = await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID, 
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
                templateParams, 
                process.env.REACT_APP_EMAILJS_USER_ID
            );
            console.log('Email sent: ', result.text);

            setName('');
            setEmail('');
            setMsg('');
            setStatus('success');
        } catch (err) {
            console.error('Error sending email: ', err.text || err.message);
            setStatus('fail');
        }
    };

    return(
        <div className={styles.wrapper} onSubmit={formHandler}>
            <p className={styles.title}>Wypełnij formularz</p>
            { status === 'success' && 
                <div className={styles.success}>
                    <p>Twoj email zostal wysłany </p>
                </div>
            }
            { status === 'fail' && 
                <div className={styles.fail}>
                    <p> Ups.. Coś poszło nie tak... </p>
                </div>
            }
            <form className={styles.form}>
                <input 
                    type="text" 
                    name="honeypot" 
                    className={styles.honeypot} 
                    value={honeypot} 
                    onChange={e => setHoneypot(e.target.value)}
                    placeholder="Leave this field empty"
                    
                />
                <div className={styles.personalData}>
                    <div className={styles.dataWrapper}>
                        <label htmlFor='name'>Imię</label>
                        <input 
                            type='text' 
                            placeholder='Twoje imię' 
                            id='name' 
                            name='name' 
                            required
                            minLength={3}
                            value={name} onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className={styles.dataWrapper}>
                        <label htmlFor='email'>E-mail</label>
                        <input 
                            type='email' 
                            placeholder='Zostaw e-mail, żebym mogła do Ciebie napisać!' 
                            id='email' 
                            name='email'
                            required
                            value={email} onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className={styles.msg}>
                    <label htmlFor='msg'> Wiadomość</label>
                    <textarea 
                        placeholder='Twoja wiadomość' 
                        id='msg' 
                        name='msg' 
                        rows={10} 
                        required
                        minLength={10}
                        value={msg} onChange={e => setMsg(e.target.value)}
                    />
                </div>
                <div className={styles.captcha}>
                    <ReCAPTCHA
                        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} 
                        onChange={handleCaptcha}
                        ref={recaptchaRef}
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