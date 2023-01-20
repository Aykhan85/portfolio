import ME from '../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className=" about__container">
                <div className="about__me-container">
                    <div className="about__me">
                        <div className="about__me-image">
                            <img src={ME} alt="my foto" />
                        </div>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>3+ Years</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>

                        <article className='about__card'>
                            <AiOutlineFundProjectionScreen className='about__icon' />
                            <h5>Projects</h5>
                            <small>70+</small>
                        </article>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vero blanditiis quam, excepturi ipsum voluptates perspiciatis ipsam, minus vel error sint consequuntur deserunt, dolor enim? Et nesciunt nobis amet explicabo!</p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About