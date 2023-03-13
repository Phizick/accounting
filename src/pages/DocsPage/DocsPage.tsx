import {Header} from "../../components/Header/Header";
import MainPageStyles from "../MainPage/MainPage.module.css";

import {Footer} from "../../components/Footer/Footer";
import {Title} from "../../components/Title/Title";
import {MainText} from "../../components/MainText/MainText";

export const DocsPage = () => {
    return (
        <>
        <Header/>
    <main className={MainPageStyles.mainContent}>
        <Title />
        <MainText/>



    </main>
            <Footer/>
        </>
    )
}