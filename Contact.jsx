import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
          <AiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>harjani.dimps143@gmail.com</h5>
            <a href="mailto:harjani.dimps143@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
          <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>9001176318</h5>
            <a href="https://api.whatsapp.com/send?phone+919001176318">Send a message</a>
          </article>
          
        </div>
        <form action="">
          <input type="text" name='name' placeholder= 'Your Full Name' required/>
          <input type="email" name='email' placeholder= 'Your Email' required/>
          <textarea name="message " rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact