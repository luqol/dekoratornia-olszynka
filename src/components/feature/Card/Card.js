import Button from '../../common/Button/Button';
import styles from './Card.module.scss';
import PropTypes from 'prop-types';

const Card = ({id, title, shortDescription, img, action}) => {

    return(
        <div className={styles.wrapper}>
            <div className={styles.card} >
                <div className={styles.imgWrapper}>
                    <img alt={title} src={`/images/portfolio/${img}`} />
                </div>
                <div className={styles.showInfo}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.description}>{shortDescription}</p>
                    <div className={styles.buttonWrapper}>
                        <Button className={styles.btn} action={ e => action(e, id)}>Więcej</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired

};

export default Card;