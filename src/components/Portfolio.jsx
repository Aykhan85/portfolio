import interriorConsultant from '../assets/interrior-consultant.png'
import errorPage from '../assets/404-not-found.png'
import myTeamPage from '../assets/my-team-page.png'
import booking from '../assets/booking.png'
import imgUploader from '../assets/image-uploader.png'
import toDo from '../assets/todo-app.png'

const photos = [
    { name: 'Image Uploader', img: imgUploader, live: true, url: "https://github.com/Aykhan85/image_uploader_api", liveUrl: 'https://image-uplader.onrender.com' },
    { name: 'Todo App', img: toDo, live: true, url: 'https://github.com/Aykhan85/todo_backend', liveUrl: 'https://todo-app-boyu.onrender.com' },
    { name: 'Interrior Consultant Page', img: interriorConsultant, live: false, url: 'https://github.com/Aykhan85/interrior-consultant' },
    { name: 'Error Page', img: errorPage, live: false, url: 'https://github.com/Aykhan85/404-Not-Found-devchallenge-' },
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
                            <a href={photo.url} className='btn'>Github</a>
                            <a href={photo.liveUrl ? photo.liveUrl : undefined} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                        </div>
                    </article >
                ))}
            </div>
        </section>
    )
}

export default Portfolio