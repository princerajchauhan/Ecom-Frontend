import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CurrencyFormat from '../../Components/CurrencyFormat'
import './cart.css'
import { addToCart, getCartProduct, removeFromCart, subTot, totAmount } from '../../Fetures/CartSlice'
import { FaPlus, FaMinus } from "react-icons/fa"
import { loadStripe } from '@stripe/stripe-js';
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Cart = () => {

    const cartData = useSelector(state => state.cart)
    // const {isLoading, cartProduct} = useSelector(state => state.products)

    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
        if (localStorage.getItem('id')) {
            dispatch(getCartProduct(localStorage.getItem('id')))
        }
        // eslint-disable-next-line
    }, [localStorage.getItem('id')])

    const increment = (id) => {
        // localStorage.setItem('allProducts', JSON.stringify(JSON.parse(localStorage.getItem('allProducts')).map(ele => {
        //     if (ele[0]._id === id) {
        //         ele[1] += 1
        //         console.log(ele[1])
        //     }
        //     return ele
        // })))
        dispatch(totAmount())
        dispatch(subTot())
    }

    const decrement = (id) => {
        localStorage.setItem('allProducts', JSON.stringify(JSON.parse(localStorage.getItem('allProducts')).map(ele => {
            if (ele[0]._id === id) {
                if (ele[1] > 1) {
                    ele[1] -= 1
                }
                else {
                    localStorage.removeItem(ele)
                    return null
                }
            }
            return ele
        }).filter(ele => ele !== null)))
        dispatch(totAmount())
        dispatch(subTot())
    }

    const payAmount = async () => {
        const stripe = await loadStripe('pk_test_51O2pl0SGM01vn0zuhMB8YaDsKBiV9XDJdbkITDDoOcMtOzO2LahZILM1gTDmKRpa7yYi14RuYBNealmsubNfp3aW004UlMoyaG');
        const body = {
            products: JSON.parse(localStorage.getItem("allProducts"))
        }
        const headers = {
            "Content-Type": 'application/json'
        }
        const response = await fetch("https://prince-ecom-backend.onrender.com/api/create-checkout-session", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        })

        const session = await response.json()
        const result = stripe.redirectToCheckout({
            sessionId: session.id
        })

        if (result.error) {
            console.log(result.error)
        }
    }



    return (<>
        {cartData.cart.length <= 0 || JSON.parse(localStorage.getItem('allProducts')).length <= 0 ?
            <>
                <Navbar />
                <div className='cart-empty'>
                    <h2> Your Cart is empty !! </h2>
                    <div className="empty-cart-image">
                        <img src="./emptyCart.png" alt="" />
                    </div>
                </div>
                <Footer />
            </> :
            <>
                <Navbar />
                <div className="cart-main">
                    <div className="cart-products">
                        {JSON.parse(localStorage.getItem('allProducts')).map((elem, index) => {
                            return (
                                <div className='cart-wrapper' key={index}>
                                    <div className="cart-details">
                                        <div className="cart-image">
                                            <img src={elem[0].image} alt="" />
                                        </div>
                                        <div className="cart-info">
                                            <h5>{elem[0].name}</h5>
                                            <p>{<CurrencyFormat price={elem[0].price} />}</p>
                                        </div>
                                    </div>
                                    <div className="cart-quantity">
                                        <button onClick={() => {
                                            dispatch(removeFromCart({ id: localStorage.getItem('id'), productId: elem[0]._id }));
                                            decrement(elem[0]._id)
                                        }}><FaMinus /></button>
                                        <span>{elem[1]}</span>
                                        <button onClick={() => {
                                            dispatch(addToCart({ id: localStorage.getItem('id'), productId: elem[0]._id }));
                                            increment(elem[0]._id);
                                        }}><FaPlus /></button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="price-details">
                        <p>PRICE DETAILS</p>
                        <div className="item-detail">
                            <div>
                                <p>Subtotal ({cartData.subTotal} item's)</p>
                                <p>{<CurrencyFormat price={cartData.totalAmount} />}</p>
                            </div>
                            <div>
                                <p>Discount</p>
                                <p>-{<CurrencyFormat price={354400 * cartData.subTotal} />}</p>
                            </div>
                            <div>
                                <p>Delivery Charges</p>
                                <p><del>₹200</del><span style={{ color: 'green', fontWeight: 600 }}> Free</span></p>
                            </div>
                        </div>
                        <div className='total-amount'>
                            <h5>Total Amount</h5>
                            <h6>{<CurrencyFormat price={cartData.totalAmount - 20000} />}</h6>
                        </div>
                        <div className='checkout'><button onClick={payAmount}>Place Your Order</button></div>
                    </div>
                </div>
                <Footer />
            </>
        }
    </>
    )
}

export default Cart