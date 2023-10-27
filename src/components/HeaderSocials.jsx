import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com" target='_blank' rel='noreferrer'><BsLinkedin /></a>
            <a href="https://github.com/Aykhan85?tab=repositories" target='_blank' rel='noreferrer'><FaGithub /></a>
            <a href="https://www.instagram.com/aykhan_nematov" target='_blank' rel='noreferrer'><BsInstagram /></a>
        </div>
    )
}

export default HeaderSocials