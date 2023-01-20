import { MdOutlineEmail } from 'react-icons/md'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineLinkedin } from 'react-icons/ai'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [textarea, setTextarea] = useState('')

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_ozznggm', 'template_swkzyd9', form.current, 'yxMc-74fetLfH9pCf')
        /* e.target.reset() */
        setName('')
        setEmail('')
        setTextarea('')
    }

    const canSave = [name, email, textarea].every(Boolean)

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>ayxannematov96@gmail.com</h5>
                        <a href="mailto:ayxannematov96@gmail.com" target='_blank' rel='noreferrer'>Send a message</a>
                    </article>

                    <article className="contact__option">
                        <BsInstagram className='contact__option-icon' />
                        <h4>Instagram</h4>
                        <h5>aykhan_nematov</h5>
                        <a href="https://www.instagram.com/aykhan_nematov" target='_blank' rel='noreferrer'>Send a message</a>
                    </article>

                    <article className="contact__option">
                        <AiOutlineLinkedin className='contact__option-icon' />
                        <h4>Linked In</h4>
                        <h5>Aykhan Nematov</h5>
                        <a href="https://www.linkedin.com/in/aykhan-nematov-98512a227/">Send a message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name='name'
                        placeholder='Your Full Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required />
                    <input
                        type="email"
                        name="email"
                        placeholder='Your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        name="message"
                        rows="7"
                        placeholder='Your Message'
                        required
                        value={textarea}
                        onChange={(e) => setTextarea(e.target.value)}
                    />
                    <button type='submit' className={canSave ? 'btn btn-primary' : 'btn-false'} disabled={!canSave}>Send Message</button>
                </form>

            </div>
        </section>
    )
}

export default Contact