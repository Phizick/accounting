
import {FC} from "react";
import MainPageStyles from './MainPage.module.css'
import {Header} from "../../components/Header/Header";
import {Head} from "../../components/Head/Head";
import {Offer} from "../../components/Offer/Offer";

export const MainPage: FC = () => {
    return (
        <>
            <Header/>
            <main className={MainPageStyles.mainContent}>
                <Head/>
                <Offer/>
            </main>
        </>
    )
}