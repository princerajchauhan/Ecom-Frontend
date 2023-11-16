import React from "react";
import loading from "./loading.gif"

const Load = () => {
    return (
        <div style={{ width:"100vw", display: 'flex', justifyContent:'center', alignItems:"center", height:"100%" }}>
                <img src={loading} alt="loading" />
            </div>
    )
}

export default Load