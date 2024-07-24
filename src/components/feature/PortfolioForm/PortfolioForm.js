import { useState } from 'react';
import Button from '../../common/Button/Button';
import styles from './PortfolioForm.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { getAllGallery } from '../../../redux/galerryRedux';
import Card from '../Card/Card';
import SpecCard from '../SpecCard/SpecCard';

const PortfolioForm = () => {
    const [selectBtn, setSelectBtn] = useState('all') // all, reno, copy, deko
    const [selectedId, setSelectedId] = useState('');
    const [status, setStatus] = useState(false); 
    const [showMore, setShowMore] = useState(false);

    const gallery = useSelector(state => getAllGallery(state));

    const filteredGallery = () => {
        if (selectBtn === 'all') {
            return gallery;
        }
        
        switch(selectBtn){
            case 'reno':
                return gallery.filter(card => card.category === 'Renowacja figur');
            case 'copy':
                return gallery.filter(card => card.category === 'Kopie obrazów');
            case 'deko':
                return gallery.filter(card => card.category === 'Dekoracje');    
            default:
                return gallery;
        }
    };

    const visibleGallery = showMore ? filteredGallery() : filteredGallery().slice(0, 6);
 
    const selectBtnHandler = (e,newState) => {
        e.preventDefault();
        setSelectBtn(newState);
        
    };

    const spacHandler = (e, id) => {
        e.preventDefault();
        setSelectedId(id);
        setStatus(true)
    };

    const closeHandler = (e) => {
        e.preventDefault();
        setStatus(false);
    };

    const showMoreHandler = (e) => {
        e.preventDefault(e);
        setShowMore(!showMore);
    };

    return(
        <div className={styles.wrapper}>
            <div className={styles.menu}>
                <ul>
                    <li>
                        <Button
                            className={clsx({[styles.activeSelect]: (selectBtn === 'all') } )} 
                            action={ e => selectBtnHandler(e, 'all')}
                            >
                                Wszystko
                        </Button>
                     </li>
                    <li>
                        <Button
                            className={clsx({[styles.activeSelect]: (selectBtn === 'reno') } )} 
                            action={ e => selectBtnHandler(e, 'reno')}
                            >
                                Renowacja Figur
                        </Button>
                        </li>
                    <li>
                        <Button
                        className={clsx({[styles.activeSelect]: (selectBtn === 'copy') } )} 
                        action={ e => selectBtnHandler(e, 'copy')}
                        >
                            Kopie Obrazów
                        </Button>
                    </li>
                    <li>
                        <Button
                        className={clsx({[styles.activeSelect]: (selectBtn === 'deko') } )} 
                        action={ e => selectBtnHandler(e, 'deko')}
                        >
                            Dekoracje
                        </Button>
                    </li>
                </ul>
            </div>

            <div className={styles.gallery}>
                {
                    visibleGallery.map( card => 
                        <Card key={card.id}  id={card.id} title={card.title} shortDescription={card.shortDescription} img={card.mainImg} action={spacHandler} />
                    )
                }
            </div>

            <div className={styles.btnWrapper}>
                <Button action={showMoreHandler} className={styles.btn}>
                    {showMore ? 'Pokaż mniej' : 'Zobacz więcej'}
                </Button>
            </div>
            
            <SpecCard id={selectedId} status={status}  action={closeHandler}/>
            
        </div>
    );
};

export default PortfolioForm;