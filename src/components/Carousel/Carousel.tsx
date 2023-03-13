import CarouselStyles from './Carousel.module.css'
import {CarouselItem} from "../Carousel-item/Carousel-item";
import imgOne from '../../images/min1.jpg'
import imgTwo from '../../images/min-2.jpg'
import imgThree from '../../images/min-3.jpg'
import imgFour from '../../images/min-4.jpg'
import imgFive from '../../images/min-5.jpg'

export const Carousel = () => {
    const servicesArr = [
        {
            text: 'Регистрация бизнеса',
            price: '57',
            img: imgOne,
            link: '/begin'
        },
        {
            text: 'Ведение бухгалтерии',
            price: '120',
            img: imgTwo,
            link: '/accounting'
        },
        {
            text: 'Зарплата и кадры',
            price: '57',
            img: imgThree,
            link: '/salary'
        },
        {
            text: 'Консультации',
            price: '57',
            img: imgFour,
            link: '/consulting'
        },
        {
            text: 'Что-нибудь еще',
            price: '57',
            img: imgFive,
            link: '/any'
        }
    ]

    return (
        <div className={CarouselStyles.list}>
        <div className={CarouselStyles.container}>
            {servicesArr.map((item: any, index) => {
                return (
                    <CarouselItem text={item.text} price={item.price} img={item.img} count={String(index + 1)} link={item.link}/>
                )
            })}
        </div>
        </div>
    )
}