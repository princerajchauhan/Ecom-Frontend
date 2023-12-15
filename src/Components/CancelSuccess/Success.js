import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";

const Success = () => {
    return (
        <div style={{ margin: '30px auto', textAlign: 'center' }}>
            <h2>Thank You for Your order !!</h2>

            <h5>Your Order Number is: <span style={{ fontWeight: '400' }}>{Math.floor(Math.random() * 10000000000000)}</span></h5>
            <h4>
                <Link to="/"
                    style={{
                        textDecoration: 'none',
                        color: 'red',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap:'5px'
                    }}>
                   <FaHome style={{color:'green'}} /> Home
                </Link>
            </h4>
        </div>
    )
}

export default Success