import React from 'react'

const Contact = () => {
    return (
        <div className='contact-main'>
            <div className="form-section">
                <h3>Contact us</h3>
                <form action="https://formspree.io/f/xoqopywo" method='POST'>
                    <input type="text" name='username' placeholder='username' autoComplete='off' />
                    <input type="email" name='Email' placeholder='abc@email.com' autoComplete='off' />
                    <textarea name="message" cols="30" rows="10" placeholder='write something here....'></textarea>
                    <input type="submit" value='Send' />
                </form>
            </div>
            <div className="map-section">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004638604!2d77.04417442618976!3d28.52725273997692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1696502847102!5m2!1sen!2sin"
                 title="iframeTitle" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Contact