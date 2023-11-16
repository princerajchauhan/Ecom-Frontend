import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { GoSignOut } from "react-icons/go";
import "./Nav.css"
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { empytCart, getCartProduct } from '../../Fetures/CartSlice';
// import { getData } from '../../Fetures/GetDataSlice';
import Category from '../Category/Category';

const Navbar = () => {

    const { cart } = useSelector(state => state.cart)
    const { products } = useSelector(state => state.products)

    const [search, setSearch] = useState()
    const [value, setValue] = useState([])

    const [showham] = useState(false)


    const [showProfile, setShowProfile] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('id')) {
            dispatch(getCartProduct(localStorage.getItem('id')))
        }
        // eslint-disable-next-line
    }, [localStorage.getItem('id')])

    // useEffect(() => {
    //     dispatch(getData())
    //     // eslint-disable-next-line
    // }, [])

    useEffect(() => {
        const hamburger = document.querySelector(".hamburger")
        const navMenu = document.querySelector(".nav-menu")

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle("hamActive")
            navMenu.classList.toggle("hamActive")
            console.log("Clicked")
        })

        document.querySelectorAll('.nav-link').forEach(n => {
            n.addEventListener('click', () => {
                hamburger.classList.remove("hamActive")
                navMenu.classList.remove("hamActive")
                console.log("click")
            })
        })
    }, [showham])

    const handleChange = (data) => {
        setSearch(data.toLowerCase())
        const result = data.length >= 1 ? products.filter(element => {
            return element && element.name.toLowerCase().includes(data.toLowerCase())
        }) : ''
        if (result.length > 0) {
            setValue(result)
        }
        else if (data.length >= 1 && result.length < 1) {
            setValue([{ name: "No Results Found" }])
        }
        else {
            setValue([])
        }
    }

    const signout = () => {
        setShowProfile(false)
        dispatch(empytCart())
        localStorage.clear()
        toast("logout successfully", { type: "success", theme: "colored" })
        navigate("/")
    }


    return (
        <>
            <div className='nav-main'>
                <div className="brand-search">
                    <div className="logo">
                        <h3 onClick={() => navigate("/")}>My/<span>Store</span></h3>
                    </div>
                    <div className="search">
                        <div className="icons">
                            <GoSearch />
                        </div>
                        <input type="text" name='search' value={search} onChange={(e) => handleChange(e.target.value)}
                            placeholder='Search for Products, Brands and More' autoComplete='off' />
                        {search && <div className="searchValue">
                            {
                                value[0].name !== "No Results Found" ? value.map((item, ind) => {
                                    return <p key={ind} onClick={() => { navigate(`/singleProduct/${item._id}`); setSearch('') }} className='click-search'>{item.name}</p>
                                }) : <p>{value[0].name}</p>
                            }
                        </div>}
                    </div>
                </div>
                <div className="nav-item">
                    <ul className="nav-menu">
                        <NavLink to='/' className="hoverBorder nav-link">Home</NavLink>
                        {/* <NavLink to='/about' className="hoverBorder">About</NavLink> */}
                        <NavLink to='/products' className="hoverBorder nav-link">Products</NavLink>
                        <NavLink to='/contact' className="hoverBorder nav-link">Contact</NavLink>
                        {!localStorage.getItem('name') ? <NavLink to='/login' className="hoverBorder nav-link">Login</NavLink> :
                            <div className="userName"><span className='admin' onClick={() => setShowProfile(!showProfile)} >{localStorage.getItem("name")[0].toUpperCase()}</span>
                                {showProfile && <ul className="dropdown">
                                    <li>Hi, {localStorage.getItem('name')}</li>
                                    <li onClick={signout}>Signout <GoSignOut /></li>
                                </ul>}
                            </div>
                        }
                        <NavLink to='/cart' className='cart-link nav-link'>
                            <FaCartShopping className='cart-trolley' />
                            {cart.user ? <span className='cart-item'>{JSON.parse(localStorage.getItem('allProducts')).length}</span> : <span className='cart-item'>0</span>}
                        </NavLink>
                    </ul>
                    <div className="hamburger">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </div>
            <Category />
        </>
    )
}

export default Navbar