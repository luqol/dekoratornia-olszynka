import { useSelector } from 'react-redux';
import styles from './SpecCard.module.scss';
import PropTypes from 'prop-types';
import { getGalleryById } from '../../../redux/galerryRedux';
import Button from '../../common/Button/Button';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import Slider from '../Slider/Slider';
import { useState } from 'react';


const SpecCard = ({id, status, action}) => {
    const data = useSelector( state => getGalleryById(state, id));
    
    const [mainImg, setMainImg] = useState('');

    const btnHandler = (e) =>{
        e.preventDefault();
        //console.log(e.target.alt);
        setMainImg(`/images/portfolio/${e.target.alt}`)
    };

    const handlePrev = (e) => {
        const index = data.images.findIndex(obj => obj.img === mainImg.split('/').pop()); 
        if(index > 0){
            setMainImg(`/images/portfolio/${data.images[index-1].img}`);
        }
        
    };

    const handleNext = (e) =>{
        const index = data.images.findIndex(obj => obj.img === mainImg.split('/').pop()); 
        if(index < (data.images.length-1)){
            setMainImg(`/images/portfolio/${data.images[index+1].img}`);
        }
        
    };

    if (!data) {
        return <div className={clsx(styles.overlay, { [styles.show]: status })}>
                   <div className={styles.wrapper}>
                       <p>Data not found</p>
                   </div>
               </div>;
    } else if( mainImg === '') {
        setMainImg(`/images/portfolio/${data.mainImg}`);
    }

    return(
        <div className={clsx(styles.overlay, {[styles.show]: status} )}>
            <div className={styles.wrapper}>
                
                <div className={styles.specCard}>
                    <div className={styles.imagesSection}>
                        <div className={styles.mainImg}>
                            <Button 
                                action={handlePrev} 
                                className={styles.prevButton}
                            >
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </Button>
                            <img alt='main img' src={mainImg}></img>
                            <Button 
                                action={handleNext} 
                                className={styles.nextButton}
                                
                            >
                                <FontAwesomeIcon icon={faChevronRight} />
                            </Button> 
                        </div>
                        <div className={styles.slider}>
                            <Slider images={data.images} action={btnHandler}/>
                        </div>                        
                    </div>
                    <div className={styles.descriptionSection}>
                        <h2 className={styles.title}>{data.title}</h2>
                        <p className={styles.category}>{data.category}</p>
                        <p className={styles.description}>{data.description}</p>
                    </div>
                    <Button  action={action} className={styles.close}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </Button>
                </div>
            </div>
        </div>
    );
};

SpecCard.propTypes = {
    id: PropTypes.string.isRequired,
}

export default SpecCard;