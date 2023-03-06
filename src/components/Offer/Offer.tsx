
import OfferStyles from './Offer.module.css'
import image from '../../images/main-page-img.jpg'
import {Button} from "../ui/Button/Button";

export const Offer = () => {
    return (
        <div className={OfferStyles.content}>
            <div className={OfferStyles.imgContainer}>
                <img src={image} alt={'бухгатерия'} className={OfferStyles.img}/>
            </div>
            <div className={OfferStyles.about}>
                <h2 className={OfferStyles.title}>Абонентское обслуживание</h2>
                <div className={OfferStyles.price}>
                    <p className={OfferStyles.month}>В месяц:</p>
                    <p className={OfferStyles.priced}>100 BYN</p>
                    <p className={OfferStyles.sale}>10 % loss</p>
                    <p className={OfferStyles.offered}>Узнайте персональную стоимость</p>
                </div>
                <div className={OfferStyles.buttons}>
                    <Button text={'Подать заявку'} type={'blue'} extraClass={`${OfferStyles.btns}`}/>
                    <Button text={'Посмотреть предложения'} type={'white'} extraClass={`${OfferStyles.btns}`}/>
                </div>
            </div>
        </div>
    )

}