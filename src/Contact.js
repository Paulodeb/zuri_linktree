import React, { useState } from 'react'
import './contact.css'
import Footer from './Footer'

function Contact() {
const [firstname, setFirstname] = useState('')
const [lastname, setLastname] = useState('')
const [email, setEmail] = useState('')
const [textarea, setTextarea] = useState('')
const [checkbox, setCheckbox] = useState(false)
const [error, setError] = useState({})
const  canSend = firstname !== '' && lastname !== '' && email !== '' && textarea !== '' && checkbox === true
error.firstname = firstname === '' ? 'First name is required' : ''
error.lastname = lastname === '' ? 'Last name is required' : ''
error.email = email === '' ? 'This is a hint text to help user.' : ''
error.textarea = textarea === '' ? 'Please enter a message' : ''
error.checkbox = checkbox === false ? 'You must agree to the terms and conditions' : ''
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
        <input id='first_name' type="text" name="firstname" placeholder="Enter your first name"
        value={firstname} onChange={(e) => setFirstname(e.target.value)}    
        />
        </div>
        <div id='last_name_container'>
        <label id='last_name_label'> Last name </label>
        <input id='last_name' type="text" name="lastname" placeholder="Enter your last name" 
        value={lastname} onChange={(e) => setLastname(e.target.value)}
        />
        
        </div>
        </div>
        <div id='email_container'>
        <label id='email_label'> Email </label>    
        <input id='email' type="email" name="email" placeholder="yourname@gmail.com"
        value={email} onChange={(e) => setEmail(e.target.value)}
        />
        {error.email && <p id='hint'>{error.email}</p>}
        </div>

        <div id='message_container'>
        <label id='message_label'>Message </label>
        <textarea id='message' name="message" placeholder="Send me a message and I'll reply you as soon as possible..."
        value={textarea} onChange={(e) => setTextarea(e.target.value)}
        >
        </textarea>
            {error.textarea && <p className='error'>{error.textarea}</p>}
        </div>

        <div id='checkbox_container'>
        <input id='checkbox_base' type= "checkbox" name="subscribe"
         onClick={(e) => setCheckbox(e.target.checked)}
            
        />

        

        <label id='text_checkbox'>
        You agree to providing your data to Paul Oyediran who may contact you.
        </label>
        </div>

        <button id='btn_submit' type="submit"
         disabled={!canSend}

         >Send message</button>
        </form>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact