import interriorConsultant from '../assets/interrior-consultant.png'
import errorPage from '../assets/404-not-found.png'
import myTeamPage from '../assets/my-team-page.png'
import booking from '../assets/booking.png'
import imgUploader from '../assets/image-uploader.png'
import toDo from '../assets/todo.png'
import carHub from '../assets/Screenshot_26.png'
import promptopia from '../assets/promptopia.png'
import nike from '../assets/nike.png'
const photos = [
    { name: 'Carhub', img: carHub, live: true, url: 'https://github.com/Aykhan85/carhub', liveUrl: 'https://carhub-ashy.vercel.app/' },
    { name: 'Promptopia', img: promptopia, live: true, url: 'https://github.com/Aykhan85/promptopia', liveUrl: 'https://promptopia-three-sandy.vercel.app/' },
    { name: 'Nike', img: nike, live: true, url: 'https://github.com/Aykhan85/nike', liveUrl: 'https://nike-ten-rouge.vercel.app/' },
    { name: 'Image Uploader', img: imgUploader, live: true, url: "https://github.com/Aykhan85/image_uploader_api", liveUrl: 'https://image-uplader.onrender.com' },
    { name: 'Todo App', img: toDo, live: true, url: 'https://github.com/Aykhan85/todo-next', liveUrl: 'https://todo-next-brown.vercel.app/' },
    { name: 'Interrior Consultant Page', img: interriorConsultant, live: true, url: 'https://github.com/Aykhan85/interrior-consultant', liveUrl: 'https://lustrous-cannoli-5d459a.netlify.app/' },
    { name: 'Error Page', img: errorPage, live: true, url: 'https://github.com/Aykhan85/404-Not-Found-devchallenge-', liveUrl: 'https://heartfelt-salamander-e9dfd5.netlify.app/' },
    { name: 'Team Page', img: myTeamPage, live: false, url: 'https://github.com/Aykhan85/team-page' },
    { name: 'Booking App copy', img: booking, live: false, url: 'https://github.com/Aykhan85/booking' },
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
                            <img src={photo.img} alt="project title" />
                        </div>
                        <h3>{photo.name}</h3>

                        <div className="portfolio__item-cta">
                            <a href={photo.url} className='btn btn-text'>Github</a>
                            {
                                photo.live && (
                                    <a href={photo.liveUrl ? photo.liveUrl : undefined}
                                        className='btn btn-primary'
                                        target='_blank'
                                        rel='noreferrer'
                                    >Live Demo</a>
                                )
                            }
                        </div>
                    </article >
                ))}
            </div>
        </section>
    )
}

export default Portfolio