import React from "react";
import loading from "./loadingdot.gif"
// import gify from "./giphy.gif"

const Spin = () => {
    return (
        <div style={{ display: 'flex' ,alignItems: 'center', justifyContent:'center', width:'80vw', margin: '20px 0' }}>
                <img src={loading} alt="loading" style={{width: "10vw"}} />
                {/* <img src={gify} alt="loading" style={{width:'200px', position:'absolute', top:"65px"}}/> */}
            </div>
    )
}

export default Spin