import React from 'react'

const Success = () =>{
    return(
        <div style={{margin: '30px auto', textAlign:'center'}}>
            <h2>Thank You for Your order !!</h2>
            
            <h5>Your Order Number is: <span style={{fontWeight: '400'}}>{Math.floor(Math.random()*10000000000000)}</span></h5>
        </div>
    )
}

export default Success