import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-main'>

            <div className="footer-top">
                <div className="footer-detail">
                    <div className="footer-heading">
                        My/Store <span className='footer-title'>Explore here</span>
                    </div>
                    <p>E-commerce is revolutionizing the way we all shop in India.
                        Why do you want to hop from one store to another in search of the
                        latest phone when you can find it on the Internet in a single click? Not only mobiles.
                        Everything you can imagine
                    </p>

                </div>
                <div className="service-help-enjoy">
                    <div className="service-help">
                        <div className="footer-services">
                            <p>Services</p>
                            <NavLink to='/'>Home</NavLink>
                            {/* <NavLink to='/about'>About</NavLink> */}
                            <NavLink to='/products'>Products</NavLink>
                            <NavLink to='/contact'>Contact</NavLink>
                        </div>
                        <div className="footer-help">
                            <p>Help</p>
                            <NavLink to=''>Payments</NavLink>
                            <NavLink to=''>Shipping</NavLink>
                            <NavLink to=''>Cancellation & Returns</NavLink>
                            <div className='phone'>Telephone: <a href="tel:7827636992">+91 7827636992</a></div>
                        </div>
                    </div>
                    <div className="footer-comment">
                        <p>Get ready to enjoy the shopping</p>
                        <div className="social">
                            <p>Social</p>
                            <div className="social-icons">
                                <i className="fa-brands fa-square-facebook fa-shake"></i>
                                <i className="fa-brands fa-square-twitter fa-spin"></i>
                                <i className="fa-brands fa-instagram fa-flip"></i>
                                <i className="fa-brands fa-youtube fa-beat"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p>	&copy; {new Date().getFullYear()} Redux Store. All Rights Reserved</p>
            </div>

        </div>
    )
}

export default Footer