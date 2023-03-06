import FooterStyles from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={FooterStyles.container}>
            <p className={FooterStyles.title}>Простые решения для вашего бизнеса</p>
            <div className={FooterStyles.border}>
                <p className={FooterStyles.footerText}>Copyright &copy;</p>
                <p className={FooterStyles.footerText}>We use cookies for best service</p>
            </div>
        </div>
    )
}