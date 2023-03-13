import {FC} from 'react'
import MainTextStyles from './MainText.module.css'
import {mainText} from "../../utils/Constants/MainText";


export const MainText: FC = () => {
    return (
        <div className={MainTextStyles.container}>
            <div className={MainTextStyles.alias}>
                <p className={MainTextStyles.aliasText}>Оферта</p>
            </div>
            <div className={MainTextStyles.mainContent}>
                <p className={MainTextStyles.textTitle}>Заголовок</p>
                <p className={MainTextStyles.text}>{mainText}</p>
            </div>


        </div>
    )
}