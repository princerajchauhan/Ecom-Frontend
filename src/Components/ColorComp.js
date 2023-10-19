import React, { useState } from 'react'
import './Color.css'

const ColorComp = ({ product }) => {
    console.log(product)
    const [colorCheck, setColorCheck] = useState()
    return (
        <div className='color-main'>
            Colours: {
                product.map((col, index) => {
                    return <button key={index} style={{ backgroundColor: col }}
                        className={col === colorCheck ? "colorStyle colorActive" : "colorStyle"}
                        onClick={setColorCheck(col)}
                    >
                    </button>
                })
            }
        </div>
    )
}

export default ColorComp