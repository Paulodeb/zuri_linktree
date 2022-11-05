import React from 'react'
import './contact.css'
import Footer from './Footer'

function Contact() {
  return (
    <>

    <div className="contact_container">
    <div id='form_container'>
        <div id='heading'>
        <h1 id='header'>Contact Me</h1>
        <p id='sub-text'>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
        <form id='form'>
        <div id='name_row'>
        <div id='first_name_container'>
        <label id='first_name_label'>
            First name
        </label>
        <input id='first_name' type="text" name="firstname" placeholder="Enter your first name"/>
        
        <p>This is a hint text to help users</p>
        </div>
        <div id='last_name_container'>
        <label id='last_name_label'> Last name </label>
        <input id='last_name' type="text" name="lastname" placeholder="Enter your last name" />
        </div>
        </div>
        <div id='email_container'>
        <label id='email_label'> Email </label>    
        <input id='email' type="email" name="email" placeholder="yourname@gmail.com"/>
        </div>

        <div id='message_container'>
        <label id='message_label'>Message </label>
        <textarea id='message' name="message" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
        </div>

        <div id='checkbox_container'>
        <input id='checkbox_base' type= "checkbox" name="subscribe" value="subscribe"/>

        <div id='text_checkbox_container'>

        <label id='text_checkbox'>
        You agree to providing your data to Paul Oyediran who may contact you.
        </label>
        </div>
        </div>

        <button id='btn_submit' type="submit">Send message</button>
        </form>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact