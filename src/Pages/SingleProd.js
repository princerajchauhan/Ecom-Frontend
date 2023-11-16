import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getData, getSingleProduct } from '../Fetures/GetDataSlice'
import CurrencyFormat from '../Components/CurrencyFormat'
import CarouselProducts from '../Components/CarouselProduct/CarouselProducts'
import Ratings from '../Components/Rating/Ratings'
import { addToCart } from '../Fetures/CartSlice'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LogoLoad from '../Spinner/LogoLoad'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
// import ColorComp from '../Components/ColorComp'

const SingleProd = () => {

    const { isSingleLoading, singleProduct } = useSelector(state => state.products)

    const id = useParams().id

    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getSingleProduct(id))
        dispatch(getData())
        // eslint-disable-next-line
    }, [id])


    return (
        <>
            {
                isSingleLoading ? <LogoLoad /> :
                    singleProduct && <>
                        <Navbar />
                        <div className='single-main'>
                            <div className="single-wrapper">
                                <div className="single-image">
                                    <img src={singleProduct.image} alt={singleProduct.name} />
                                    <div className="cart-btn">
                                        <button onClick={() => {
                                            localStorage.getItem("Token") && localStorage.getItem("id") ? dispatch(addToCart({ id: localStorage.getItem("id"), productId: singleProduct._id, elem: singleProduct })) : toast("Login needed to add products", { type: "warning", theme: "colored" });
                                            localStorage.getItem("Token") && localStorage.getItem("id") && toast("items added to cart", { type: "success", theme: "colored" })
                                        }}>Add To Cart</button>
                                        <button>Buy Now</button>
                                    </div>
                                </div>
                                <div className="single-detail">
                                    <h3>{singleProduct.name}</h3>
                                    <div className="start-review">
                                        <Ratings stars={singleProduct.stars} reviews={singleProduct.reviews} />
                                    </div>
                                    <p>MRP: <del>{<CurrencyFormat price={singleProduct.price + 354400} />}</del></p>
                                    <span className='extra-off'>Extra {<CurrencyFormat price={354400} />} off</span>
                                    <p>{<CurrencyFormat price={singleProduct.price} />}</p>
                                    <p>{singleProduct.description}</p>
                                    <div className="delivery-detail">
                                        <div className="delivery-col">
                                            <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png" alt="" className='delivery-icon' />
                                            <p>Free Delivery</p>
                                        </div>
                                        <div className="delivery-col">
                                            <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png" alt="" className='delivery-icons' />
                                            <p>7 Days Replacement</p>
                                        </div>
                                        <div className="delivery-col">
                                            <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png" alt="" className='delivery-icon' />
                                            <p>1 Year warranty</p>
                                        </div>
                                        <div className="delivery-col">
                                            <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png" alt="" className='delivery-icon' />
                                            <p>Pay on delivery</p>
                                        </div>
                                        <div className="delivery-col">
                                            <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png" alt="" className='delivery-icons' />
                                            <p>My/Store Delivered</p>
                                        </div>
                                    </div>
                                    {/* <ColorComp product={singleProduct.colors} /> */}
                                    <h6>Available : {singleProduct.stock > 0 ? <span style={{ color: 'green' }}>In Stock</span> : <span style={{ color: 'red' }}>Out of Stock</span>}</h6>
                                    <div><span style={{ fontWeight: 600 }}>Brand:</span> {singleProduct.company}</div>
                                </div>
                            </div>
                            <hr />
                            <CarouselProducts heading="You might be interested in" />
                        </div>
                        <Footer />
                    </>
            }
        </>
    )
}

export default SingleProd