import {Header} from "../../components/Header/Header";
import {FC} from 'react'
import BeginPageStyles from '../BeginPage/BeginPage.module.css';
import {Footer} from "../../components/Footer/Footer";
import img from '../../images/solary.png'
import {CardItem} from "../../components/CardItem/CardItem";
import imgProfile from '../../images/min-4.jpg'
import shape from '../../images/Shape_down.png'
import {Breadcrumbs} from "../../components/Breadcrumbs/Breadcrumbs";
import ScrollToTop from "../../utils/ScrollToTop/ScrollToTop";


export const SalaryPage: FC = () => {
    return (
        <>
            <ScrollToTop />
            <Header/>
            <Breadcrumbs text={'Зарплата и кадры'}/>
            <div className={BeginPageStyles.imgContainer}>
                <img src={img} alt={''} className={BeginPageStyles.img}/>
            </div>
            <main className={BeginPageStyles.mainContent}>
                <div className={BeginPageStyles.about}>
                    <CardItem title={'Зарплата и кадры'} text={'Подсчет и выплаты'} price={'150 BYN'} img={imgProfile}/>
                </div>
                <div className={BeginPageStyles.mainText}>
                    <div className={BeginPageStyles.textContainer}>
                        <div className={BeginPageStyles.titleContainer}>
                            <h5 className={BeginPageStyles.textTitle}>Как это работает?</h5>
                            <img className={BeginPageStyles.titleImg} src={shape}/>
                        </div>
                        <p className={BeginPageStyles.text}>The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode." </p>
                    </div>
                    <div className={BeginPageStyles.textContainer}>
                        <div className={BeginPageStyles.titleContainer}>
                            <h5 className={BeginPageStyles.textTitle}>Наши преимущества</h5>
                            <img className={BeginPageStyles.titleImg} src={shape}/>
                        </div>
                        <p className={BeginPageStyles.text}>The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode." </p>
                    </div>
                    <div className={BeginPageStyles.textContainer}>
                        <div className={BeginPageStyles.titleContainer}>
                            <h5 className={BeginPageStyles.textTitle}>Оплата</h5>
                            <img className={BeginPageStyles.titleImg} src={shape}/>
                        </div>
                        <p className={BeginPageStyles.text}>The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode." </p>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}