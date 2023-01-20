import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineLinkedin } from 'react-icons/ai';
const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Aykhan</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href=""><FaFacebookF /></a>
                <a href=""><BsInstagram /></a>
                <a href=""><AiOutlineLinkedin /></a>
            </div>
        </footer>
    )
}

export default Footer