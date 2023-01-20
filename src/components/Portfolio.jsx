import IMG1 from '../assets/portfolio1.jpg'
import IMG2 from '../assets/portfolio2.jpg'
import IMG3 from '../assets/portfolio3.jpg'
import IMG4 from '../assets/portfolio4.jpg'
import IMG5 from '../assets/portfolio5.png'
import IMG6 from '../assets/portfolio6.jpg'

const photos = [
    IMG1, IMG2, IMG3, IMG4, IMG5, IMG6
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="portfolio__container">
                {photos.map((photo, index) => (
                    < article className='portfolio__item' key={index} >
                        <div className="portfolio__item-image">
                            <img src={photo} alt="project title" />
                        </div>
                        <h3>This is a portfolio item title</h3>

                        <div className="portfolio__item-cta">
                            <p className='btn'>Github</p>
                            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                        </div>
                    </article >
                ))}
            </div>
        </section>
    )
}

export default Portfolio