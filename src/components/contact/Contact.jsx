import React from 'react'

export default function Contact() {
  return (
    <div>
        <h3>contact me</h3>

        <p>You can reach me on <a href="https://www.linkedin.com/in/luana-buca/">linkedIn</a> or see the code behind my projects on my <a href="#">GitHub</a> profile.</p>
        <p>You can also sent me an email by using the form below. Whichever you prefer.</p>

        <div className='form'>
            <label htmlFor="name">Name: </label>
            <input type="text" className='input-item' id='name' />

            <label htmlFor="email">Email: </label>
            <input type="email" className='input-item' id='email' />

            <label htmlFor="message">Message: </label>
            <input type="textarea" className='input-item' id='message' />

            <button id='send-btn' type='submit'>Send</button>
        </div>
    </div>
  )
}