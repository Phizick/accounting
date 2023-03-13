import React from 'react'
import CardItemStyles from './CardItem.module.css'
import {Button} from "../ui/Button/Button";


interface ICardItemProps {
    title: string,
    text: string,
    price: string,
    img: string,

}

export const CardItem: React.FC<ICardItemProps> = ({
    title = '',
    text = '',
    price = '',
    img = ''
}) => {
    return (
            <div className={CardItemStyles.container}>
                <div className={CardItemStyles.profile}>
                    <div className={CardItemStyles.profileContainer}>
                        <div className={CardItemStyles.profileImg}>
                            <img src={img} alt={''} className={CardItemStyles.img}/>
                        </div>
                    </div>
                    <p className={CardItemStyles.profileTitle}>{title}</p>
                    <p className={CardItemStyles.profileText}>{text}</p>
                    <div className={CardItemStyles.prices}>
                        <p className={CardItemStyles.profilePrice}>от {price}</p>
                        <p className={CardItemStyles.priceName}></p>
                    </div>
                    <Button text={'Получить'} type={"blue"}/>
                </div>
            </div>
    )
}