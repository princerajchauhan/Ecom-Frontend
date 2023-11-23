import React, { useEffect } from 'react'
import Welcome from '../Components/Welcome/Welcome'
import NewArrival from '../Components/NewArrival/NewArrival'
import Services from '../Components/Services/Services'
import CarouselProducts from '../Components/CarouselProduct/CarouselProducts'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Fetures/GetDataSlice'
import LogoLoad from '../Spinner/LogoLoad'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import VideoAds from '../Components/VideoAds/VideoAds'

const Home = () => {
    const { isLoading } = useSelector(state => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getData())
        // eslint-disable-next-line
    }, [])
    // console.log(isLoading)
    return (
        <>
            {
                isLoading ? <LogoLoad /> :
                    <>
                        <Navbar />
                        <Welcome />
                        <NewArrival />
                        <CarouselProducts heading="Try Other Products_" />
                        <VideoAds />
                        <Services />
                        <Footer />
                    </>
            }
        </>
    )
}

export default Home