import React, { useEffect } from 'react'
import './Welcome.css'
// import Data from '../Context/ContextData'
import { useNavigate } from 'react-router-dom'
import { getData } from '../Fetures/GetDataSlice'
import { useDispatch, useSelector } from 'react-redux'

const Welcome = () => {

    // const { isLoading, products } = useContext(Data)

    const {isLoading, products} = useSelector(state => state.products)
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getData())
    }, [])

    const navigate = useNavigate()

    return (
        <div className='welcome my-3'>

            <div className="welcome-data">
                <p className='welcomeTo'>Welcome to</p>
                <div className="welcome-store">
                    <h1 data-text="My/Store.">My/Store.</h1>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repudiandae dolorem nobis quod, pariatur repellat dolores. Doloremque maiores rem animi minus aliquid? Similique ea quia nostrum doloremque ipsam incidunt quod.</p>
                <button className='shop-btn' onClick={()=>navigate("/products")}>Shop More</button>
            </div>

            <div id="carouselExampleDark" className="carousel slide" data-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    {isLoading ? <h1>Loading....</h1> :
                        products && Array.from(products).sort(() => Math.random() - Math.random()).slice(0, 3).map(elem => {
                            return (
                                <div className="carousel-item active" data-bs-interval="3000" key={elem.id}>
                                    <img src={elem.image} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-md-block">
                                        <h5>{elem.name}</h5>
                                        <p>{elem.description.slice(0, 40)}...</p>
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