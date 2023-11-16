import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import "./CarouselProd.css"
import CurrencyFormat from '../CurrencyFormat';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../Fetures/CartSlice';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Spin from '../../Spinner/Spin';

const CarouselProducts = ({ heading }) => {

    const { isLoading, products } = useSelector(state => state.products)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        miniLaptop: {
            breakpoint: { max: 1024, min: 800 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='carousel-main' >
            <div className="carousel-container">
                <div className="carousel-heading">
                    <h2 data-text={heading}>{heading}</h2>
                </div>
                <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={1500} infinite={true}>
                    {
                        isLoading ? <Spin /> :
                            products && Array.from(products).sort(() => Math.random() - Math.random()).map(elem => {
                                return (
                                    // <div key={elem.id} className='wrapper'>
                                    //     <div className="carousel-image">
                                    //         <img src={elem.image} alt="" onClick={() => navigate(`/singleproduct/${elem.id}`)} />
                                    //     </div>
                                    //     <div className="carousel-data">
                                    //         <h5>{elem.name.slice(0, 20)}</h5>
                                    //         <p>{elem.description.slice(0, 40)}</p>
                                    //         <p>Price: {<CurrencyFormat price={elem.price} />}</p>
                                    //         <button className='carousel-btn' onClick={() => {
                                    //             dispatch(addToCart({ id: elem.id, name: elem.name, price: elem.price, image: elem.image, quantity:1 }));
                                    //             toast("items added to cart",{type: "success", theme: "colored"})
                                    //         }}>
                                    //             Add To Cart
                                    //         </button>
                                    //     </div>
                                    // </div>
                                    <div className="card wrapper" style={{ height:'350.725px' }} key={elem.id}>
                                        <img src={elem.image} className="card-img-top" alt={elem.name} onClick={() => navigate(`/singleproduct/${elem._id}`)} />
                                        <div className="card-body">
                                            <h5 className="card-title">{elem.name.slice(0,15)}</h5>
                                            <p className="card-text">Price: {<CurrencyFormat price={elem.price} />}</p>
                                            <button className="carousel-btn" onClick={() => {
                                                localStorage.getItem("Token") && localStorage.getItem("id") ?dispatch(addToCart({ id: localStorage.getItem("id"), productId: elem._id, elem })):toast("Login needed to add products", { type: "warning", theme: "colored" });
                                                localStorage.getItem("Token") && localStorage.getItem("id")  && toast("items added to cart", { type: "success", theme: "colored" })
                                            }}> Add To Cart</button>
                                        </div>
                                    </div>
                                )
                            })
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default CarouselProducts