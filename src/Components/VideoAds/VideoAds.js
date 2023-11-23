import React from 'react'
import ReactPlayer from 'react-player'

const VideoAds = () =>{
    return(
        <div style={{width: "88vw",margin: "auto"}}>
            <ReactPlayer 
                url="https://www.youtube.com/watch?v=HY2e-bW0jO0&pp=ygUeZmxpcGthcnQgYmlnIGJpbGxpb24gZGF5IHZpZGVv"
                controls={true}
                width= "100%"
                muted={true}
                style={{borderRadius: '55px'}}
            />
        </div>
    )
}

export default VideoAds