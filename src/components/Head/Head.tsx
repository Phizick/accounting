import {FC} from 'react'
import HeadStyles from './Head.module.css'
import {Button} from "../ui/Button/Button";

export const Head: FC = () => {
    return (
        <div className={HeadStyles.container}>
            <p className={HeadStyles.subtitle}>сделайте свой бизнес эффективнее</p>
            <h1 className={HeadStyles.title}>Простые решения для вашего бизнеса</h1>
            <Button text={'Узнать подробности'} type={'white'}/>
        </div>
    )
}