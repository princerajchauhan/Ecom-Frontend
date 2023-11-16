import React from 'react'
import "./LogoLoad.css"
import logo from "./mslogo.png"

const LogoLoad = () =>{
    return(
        <div className='logoload'>
            <img src={logo} alt="Logo" />
        </div>
    )
}

export default LogoLoad