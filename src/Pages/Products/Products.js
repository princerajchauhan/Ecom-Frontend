import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CurrencyFormat from '../../Components/CurrencyFormat'
import { getData } from '../../Fetures/GetDataSlice'
import './Products.css'
import { addToCart } from '../../Fetures/CartSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
// import Loader from '../../Spinner/Loader'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import LogoLoad from '../../Spinner/LogoLoad'

const Products = () => {
    const { isLoading, products } = useSelector(state => state.products)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [filterCategory, setFilterCategory] = useState('')
    const [filterBrand, setFilterBrand] = useState('')

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getData())
        // eslint-disable-next-line
    }, [])

    const filterFunction = () => {
        return products.filter(ele => filterCategory === '' ? ele : ele.category === filterCategory).filter(ele => filterBrand === '' ? ele : ele.company === filterBrand)
    }

    return (
        <>
            {
                isLoading ? <LogoLoad /> :
                    <>
                        <Navbar />
                        <div className='products-main'>
                            <div className="filter-side">
                                <div className="category-wise">
                                    <p>Category</p>
                                    <ul>
                                        <li onClick={() => setFilterCategory('')} className={filterCategory === '' ? "filter-category" : ''}>All</li>
                                        {
                                            products && Array.from(new Set(products.map(elem => elem.category))).map((cat, index) => {
                                                return <li key={index} onClick={() => setFilterCategory(cat)} className={filterCategory === cat ? "filter-category" : ''}>{cat}</li>
                                            })
                                        }

                                    </ul>
                                </div>
                                <div className="brand-wise">
                                    <select onChange={(e) => setFilterBrand(e.target.value)}>
                                        <option hidden disabled selected>Select Brand</option>
                                        <option value=''>All</option>
                                        {
                                            products && Array.from(new Set(products.map(ele => ele.company))).map((comp, index) => {
                                                return <option key={index} >{comp}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="product-side">
                                <div className="product-top">
                                    {filterFunction().length <= 0 ? <h2>No Results Found</h2> :
                                        <>
                                            {
                                                products && filterFunction().length
                                            } Results found
                                        </>
                                    }
                                </div>
                                <div className={filterCategory === '' ? "all-products" : 'filtered-products'}>
                                    {
                                        products && filterFunction().map(elem => {
                                            return (
                                                <div className='products-wrapper' key={elem.id}>
                                                    <div className="products-image">
                                                        <img src={elem.image} alt={elem.name} onClick={() => navigate(`/singleproduct/${elem._id}`)} />
                                                    </div>
                                                    <div className="product-details">
                                                        <h5>{elem.name.slice(0, 30)}</h5>
                                                        <p><span style={{ fontWeight: 600, color: "blue" }}>Price:</span> {<CurrencyFormat price={elem.price} />}</p>
                                                        <button className='product-btn' onClick={() => {
                                                            localStorage.getItem("Token") && localStorage.getItem("id") ? dispatch(addToCart({ id: localStorage.getItem("id"), productId: elem._id, elem })) : toast("Login needed to add products", { type: "warning", theme: "colored" });
                                                            localStorage.getItem("Token") && localStorage.getItem("id") && toast("items added to cart", { type: "success", theme: "colored" })
                                                        }}>Add To Cart</button>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div >
                        <Footer />
                    </>
            }
        </>
    )
}

export default Products