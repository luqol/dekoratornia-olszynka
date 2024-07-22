import Button from '../../common/Button/Button';
import styles from './Card.module.scss';
import PropTypes from 'prop-types';

const Card = ({title, description, img}) => {

    const btnHandler = (e) => {
        e.preventDefault();
        
    };
    return(
        <div className={styles.wrapper}>
            <div className={styles.card} >
                <div className={styles.imgWrapper}>
                    <img alt={title} src={`/images/portfolio/${img}`} />
                </div>
                <div className={styles.showInfo}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.buttonWrapper}>
                        <Button className={styles.btn} action={btnHandler}>Więcej</Button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,

};

export default Card;