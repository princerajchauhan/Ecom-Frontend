import React, { useState } from 'react'
import './Welcome.css'
// import Data from '../Context/ContextData'
import { useNavigate } from 'react-router-dom'
// import { getData } from '../Fetures/GetDataSlice'
import { useSelector } from 'react-redux'
import TopImages from '../BigBillion'
import Spinner from '../../Spinner/Spinner'

const Welcome = () => {

    // const { isLoading, products } = useContext(Data)

    const { isLoading } = useSelector(state => state.products)
    // const dispatch = useDispatch()

    const [topimg] = useState(TopImages.sort(() => Math.random() - Math.random()).slice(0, 3))

    // useEffect(() => {
    //     dispatch(getData())
    //     // eslint-disable-next-line
    // }, [])

    const navigate = useNavigate()

    return (
        <div className='welcome my-3'>

            <div className="welcome-data">
                <p className='welcomeTo'>Welcome to</p>
                <div className="welcome-store">
                    <h1 data-text="My/Store.">My/Store.</h1>
                </div>
                <p>E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in search of the latest phone when you can find it on the Internet in a single click? Not only mobiles. Everything you can imagine</p>
                <button className='shop-btn' onClick={() => navigate("/products")}>Shop More</button>
            </div>

            <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    {isLoading ? <Spinner /> :
                        topimg && topimg.map(elem => {
                            return (
                                <div className="carousel-item active" data-bs-interval="3000" key={elem.id}>
                                    <img src={elem.img} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        {/* <h5>hello</h5>
                                        <p>des</p> */}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}

            </div>

        </div>
    )
}

export default Welcome