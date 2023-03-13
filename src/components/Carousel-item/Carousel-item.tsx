import React from 'react'
import CarouselItemStyles from './Carousel-item.module.css'
import HeaderPageStyles from "../Header/Header.module.css";
import {Link} from "react-router-dom";

interface ICarouselItemProps {
    text: string,
    price: string,
    img: string,
    count: string,
    link: string
}




export const CarouselItem: React.FC<ICarouselItemProps> = ({
    text = '',
    price = '',
    img = '',
    count = '',
    link ='',
}) => {
    return (
        <div className={CarouselItemStyles.tile}>
            <Link to={link} className={HeaderPageStyles.link} >
            <div className={CarouselItemStyles.container}>
                <div className={CarouselItemStyles.itemHeader}>
                    <div className={CarouselItemStyles.labelContainer}>
                        <p className={CarouselItemStyles.count}>#{count}</p>
                    </div>
                    <p className={CarouselItemStyles.about}>Узнать &#8594;</p>
                </div>
                <div className={CarouselItemStyles.profile}>
                    <div className={CarouselItemStyles.profileContainer}>
                        <div className={CarouselItemStyles.profileImg}>
                            <img src={img} alt={''} className={CarouselItemStyles.img}/>
                        </div>
                    </div>
                    <p className={CarouselItemStyles.profileTitle}>{text}</p>
                    <div className={CarouselItemStyles.prices}>
                        <p className={CarouselItemStyles.profilePrice}>от {price} BYN</p>
                        <p className={CarouselItemStyles.priceName}></p>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    )
}