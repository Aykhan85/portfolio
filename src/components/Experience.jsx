import { BsPatchCheckFill } from 'react-icons/bs'
const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <div>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>HTML</h4>

                                </div>
                            </article>

                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>CSS</h4>

                                </div>
                            </article>

                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>Bootstrap</h4>

                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>Tailwind</h4>

                                </div>
                            </article>
                        </div>

                        <div>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>JavaScript</h4>

                                </div>
                            </article>

                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>React</h4>

                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>Redux</h4>

                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>Next</h4>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Experience