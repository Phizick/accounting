import AboutStyles from './About.module.css'
import img from '../../images/cubes.png'
import {Button} from "../ui/Button/Button";


export const About = () => {
    return (
        <div className={AboutStyles.container}>
            <div className={AboutStyles.content}>
                <p className={AboutStyles.subtitle}>все сделаем мы</p>
                <h2 className={AboutStyles.title}>Сфокусируйтесь на&nbsp;развитии</h2>
                <p className={AboutStyles.altSubtitle}>документы и отчетность</p>
                <div className={AboutStyles.buttons}>
                    <Button text={'Стать клиентом'} type={'blue'}/>
                    <Button text={'Узнать больше'} type={'white'}/>
                </div>

            </div>
            <div className={AboutStyles.imgContainer}>
                <img src={img} alt={''}/>
            </div>
        </div>
    )
}