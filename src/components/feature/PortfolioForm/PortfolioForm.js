import { useState } from 'react';
import Button from '../../common/Button/Button';
import styles from './PortfolioForm.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { getAllGallery } from '../../../redux/galerryRedux';
import Card from '../Card/Card';

const PortfolioForm = () => {
    const [selectBtn, setSelectBtn] = useState('all') // all, reno, copy, deko

    const gallery = useSelector(state => getAllGallery(state));

    const filteredGallery = () => {
        if (selectBtn === 'all'){
            return gallery
        } else {
            gallery.filter(card => card.type === selectBtn);
        }
        switch(selectBtn){
            case 'reno':
                return gallery.filter(card => card.type === 'figura');
            case 'copy':
                return gallery.filter(card => card.type === 'obraz');
            case 'deko':
                return gallery.filter(card => card.type === 'dekoracja');    
            default:
                return gallery;
        }
    };
 
    const selectBtnHandler = (e,newState) => {
        e.preventDefault();
        setSelectBtn(newState);
        
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
                    filteredGallery().map( card => 
                        <Card key={card.id} title={card.title} description={card.description} img={card.img} />
                    )
                }
            </div>
        </div>
    );
};

export default PortfolioForm;