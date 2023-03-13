import {FC} from 'react'
import HeaderPageStyles from './Header.module.css'
import {Outlet, Link} from "react-router-dom";
import {Button} from "../ui/Button/Button";
import img from '../../images/divider.svg'

export const Header: FC = () => {
    return (
        <header className={HeaderPageStyles.header}>
            <nav className={HeaderPageStyles.nav}>
                <div className={HeaderPageStyles.container}>
                    <img src={img} alt={''}/>
                <p className={HeaderPageStyles.text}>
                    <Link to='/' className={HeaderPageStyles.link}>Главная</Link>
                </p>
                <p className={HeaderPageStyles.text}>
                    <Link to='/docs' className={HeaderPageStyles.link}>Оферта</Link>
                </p>
                </div>
                <div className={HeaderPageStyles.buttons}>
                    <Button text={'Стать клиентом'} type={'blue'}/>
                    <Button text={'Связаться'} type={'white'}/>
                </div>
                <Outlet/>
            </nav>
        </header>
    )
}