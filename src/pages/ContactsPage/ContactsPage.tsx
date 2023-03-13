import {Header} from "../../components/Header/Header";
import {FC} from 'react'
import ContactsStyles from './ContactsPage.module.css';
import {Footer} from "../../components/Footer/Footer";


import {Breadcrumbs} from "../../components/Breadcrumbs/Breadcrumbs";
import ScrollToTop from "../../utils/ScrollToTop/ScrollToTop";


export const ContactsPage: FC = () => {
    return (
        <>
            <ScrollToTop />
            <Header/>
            <Breadcrumbs text={'Связаться'}/>
            <main className={ContactsStyles.mainContent}>

            </main>
            <Footer/>
        </>
    )
}