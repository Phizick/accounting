import {Carousel} from "../Carousel/Carousel";
import ServicesStyles from './Services.module.css'

export const Services = () => {
    return (
        <div className={ServicesStyles.container}>
            <h2 className={ServicesStyles.title}>Услуги</h2>
            <Carousel/>
        </div>

    )
}