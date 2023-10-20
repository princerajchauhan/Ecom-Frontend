import React from "react";
import loading from "./loadingball.gif"

const Spinner = () => {
    return (
        <div style={{ display: 'flex' ,alignItems: 'center', justifyContent:'center' }}>
                <img src={loading} alt="loading" />
            </div>
    )
}

export default Spinner