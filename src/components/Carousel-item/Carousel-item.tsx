import React from 'react'
import CarouselItemStyles from './Carousel-item.module.css'

interface ICarouselItemProps {
    text: string,
    price: string,
    img: string,
    count: string
}

export const CarouselItem: React.FC<ICarouselItemProps> = ({
    text = '',
    price = '',
    img = '',
    count = ''
}) => {
    return (
        <div className={CarouselItemStyles.tile}>
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
        </div>
    )
}