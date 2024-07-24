import styles from './Slider.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '../../common/Button/Button';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Slider = ({images, action}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = (e) => {
        e.preventDefault();
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
        }
    };

    const handleNext = (e) => {
        e.preventDefault();
        if (currentIndex < images.length - 3) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
    };

    return(
        <div className={styles.carousel}>
            <Button 
                action={handlePrev} 
                className={styles.prevButton}
                disabled={currentIndex === 0}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </Button>
            <div className={styles.imageContainer}>
                {images.slice(currentIndex, currentIndex + 3).map(img => (
                    <img 
                        key={img.id} 
                        src={`/images/portfolio/${img.img}`} 
                        alt={img.img}
                        onClick={action}
                    />
                ))}
            </div>
            <Button 
                action={handleNext} 
                className={styles.nextButton}
                disabled={currentIndex >= images.length - 3} 
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </Button> 
        </div>
    );
};

Slider.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    action: PropTypes.func.isRequired,
}

export default Slider;