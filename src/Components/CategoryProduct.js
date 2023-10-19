import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Fetures/GetDataSlice'
import { useNavigate, useParams } from 'react-router-dom'
import CurrencyFormat from './CurrencyFormat'
import { toast } from 'react-toastify'
import "./CategoryProd.css"
import { addToCart } from '../Fetures/CartSlice'

const CategoryProduct = () => {
    const { isLoading, products } = useSelector(state => state.products)

    const cat = useParams().category

    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getData())
    }, [])
    return (
        <div className='categoryproduct-main'>
            {
                isLoading ? <h2>Loading....</h2> :
                    products.filter(ele => ele.category === cat).map(ele => {
                        return <div className='cateProd-main' key={ele._id}>
                            <img src={ele.image} alt="" onClick={() => navigate(`/singleProduct/${ele._id}`)} />
                            <div className="catProd-details">
                                <h5>{ele.name.slice(0, 30)}</h5>
                                <p><span style={{ fontWeight: 600, color: "blue" }}>Price:</span> {<CurrencyFormat price={ele.price} />}</p>
                                <button className='product-btn' onClick={() => {
                                    localStorage.getItem("Token") ? dispatch(addToCart({ id: localStorage.getItem("id"), productId: ele._id, elem: ele })) : toast("Login needed to add products", { type: "warning", theme: "colored" });
                                    localStorage.getItem("Token") && toast("items added to cart", { type: "success", theme: "colored" })
                                }}>Add To Cart</button>
                            </div>
                        </div>
                    })
            }
        </div>
    )
}

export default CategoryProduct