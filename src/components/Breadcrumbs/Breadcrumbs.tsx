import {FC} from 'react'
import breadcrumbsStyles from './Breadcrumbs.module.css'
import {Outlet, Link} from "react-router-dom";
import {Button} from "../ui/Button/Button";
import shape from '../../images/Shape.png'
import arrow from '../../images/vector_line.png';

interface IBreadcrumbs {
    text: string
}

export const Breadcrumbs: FC<IBreadcrumbs> = ({text= ''}) => {
    return (
        <div className={breadcrumbsStyles.header}>
            <nav className={breadcrumbsStyles.nav}>
                <Link to='/' className={breadcrumbsStyles.link}>
                    <Button text={'Вернуться на главную'} type={'white'} img={arrow}/>
                </Link>
                <div className={breadcrumbsStyles.container}>
                    <p className={`${breadcrumbsStyles.text} ${breadcrumbsStyles.textDisable}`}>
                        Главная
                    </p>
                    <img src={shape} alt={''} className={breadcrumbsStyles.img}/>
                    <p className={breadcrumbsStyles.text}>
                        {text}
                    </p>
                </div>
                <Outlet/>
            </nav>
        </div>
    )
}