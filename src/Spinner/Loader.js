import React from "react";
import loading from "./giphy.gif"

const Spinner = () => {
    return (
        <div style={{ width:"100vw", display: 'flex', justifyContent:'center', alignItems:"flex-start" }}>
                <img src={loading} alt="loading" />
            </div>
    )
}

export default Spinner