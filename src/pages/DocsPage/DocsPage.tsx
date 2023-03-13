import {Header} from "../../components/Header/Header";
import MainPageStyles from "../MainPage/MainPage.module.css";

import {Footer} from "../../components/Footer/Footer";
import {Title} from "../../components/Title/Title";
import {MainText} from "../../components/MainText/MainText";
import ScrollToTop from "../../utils/ScrollToTop/ScrollToTop";

export const DocsPage = () => {
    return (
        <>
            <ScrollToTop />
        <Header/>
    <main className={MainPageStyles.mainContent}>
        <Title />
        <MainText/>



    </main>
            <Footer/>
        </>
    )
}