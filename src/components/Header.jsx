import CTA from './CTA'
import ME from '../assets/me3.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="header__container">
                <h5 className='text-light'>Hello I'm</h5>
                <h1>Aykhan</h1>
                <h5 className="text-light">Frontend Developer</h5>
                <CTA className='cta' />

                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header