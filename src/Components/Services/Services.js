import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import './Service.css'

const Services = () =>{
    return(
        <div className='service-main'>
            <div className="service-heading">
            <h3 data-text="Our Services">Our Services</h3>
            </div>
            <div className="service-wrapper">

                <div className="service-col1 services">
                    <TbTruckDelivery className='service-icon'  />
                    <p>Super Fast & Free Delivery</p>
                </div>

                <div className="service-col2">
                    <div className="service-row">
                        <MdSecurity className='service-icon' />
                        <p>Non Contact Shipping</p>
                    </div>
                    <div className="service-row">
                        <FaWallet className='service-icon'  />
                        <p>Money Back Guaranteed</p>
                    </div>
                </div>

                <div className="service-col3 services">
                    <RiSecurePaymentFill className='service-icon'  />
                    <p>Secure Payment Gateway</p>
                </div>
                
            </div>
        </div>
    )
}

export default Services