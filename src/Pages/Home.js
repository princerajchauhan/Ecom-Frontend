import React from 'react'
import Welcome from '../Components/Welcome'
import NewArrival from '../Components/NewArrival'
import Services from '../Components/Services'
import CarouselProducts from '../Components/CarouselProducts'

const Home = () =>{
    return(
        <>
            <Welcome />
            <NewArrival />
            <CarouselProducts heading="Try Other Products_"/>
            <Services />
        </>
    )
}

export default Home