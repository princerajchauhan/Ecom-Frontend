import React from 'react'
import { NavLink } from 'react-router-dom'
import './Category.css'

const Category = () =>{
    return(
        <div className='category-main'>
            <div className="mobile">
                <NavLink to="/categoryproduct/Mobile">Mobile</NavLink>
            </div>
            <div className="mobile">
                <NavLink to="/categoryproduct/Laptop">Laptop</NavLink>
            </div>
            <div className="mobile">
                <NavLink to="/categoryproduct/Watch">Watch</NavLink>
            </div>
            <div className="mobile">
                <NavLink to="/categoryproduct/Earphone">Earphone</NavLink>
            </div>
        </div>
    )
}

export default Category