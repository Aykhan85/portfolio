import ME from '../assets/me2.jpg'
import { FaAward } from 'react-icons/fa'
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
                            <small>1 Years</small>
                        </article>


                        <article className='about__card'>
                            <AiOutlineFundProjectionScreen className='about__icon' />
                            <h5>Projects</h5>
                            <small>10+</small>
                        </article>
                    </div>


                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About