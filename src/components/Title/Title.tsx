import {FC} from 'react'
import TitleStyles from './Title.module.css'


export const Title: FC = () => {
    return (
        <div className={TitleStyles.container}>
            <p className={TitleStyles.subtitle}>сделайте свой бизнес эффективнее</p>
            <h1 className={TitleStyles.title}>Оферта</h1>
            <p className={TitleStyles.subtitle}>если у вас возникли вопросы - свяжитесь с нами</p>
        </div>
    )
}