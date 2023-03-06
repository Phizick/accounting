
import MainPageStyles from './MainPage.module.css'
import {Header} from "../../components/Header/Header";
import {Head} from "../../components/Head/Head";
import {Offer} from "../../components/Offer/Offer";
import {Services} from "../../components/Services/Services";

export const MainPage = () => {
    return (
        <>
            <Header/>
            <main className={MainPageStyles.mainContent}>
                <Head/>
                <Offer/>
                <Services/>
            </main>
        </>
    )
}