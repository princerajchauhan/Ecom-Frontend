
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Cart from '../Pages/Cart'
import ErrorPage from '../Pages/ErrorPage'
import SingleProd from '../Pages/SingleProd'
import Products from '../Pages/Products'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Login from "../LoginSignup/Login"
import Signup from "../LoginSignup/Signup"
import { ToastContainer } from 'react-toastify'
import CategoryProduct from '../Components/CategoryProduct'
import Category from '../Components/Category'
import Success from '../Components/Success'
import Cancel from '../Components/Cancel'

const Routing = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Category />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Signup />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/singleproduct/:id' element={<SingleProd />} />
                    <Route path='/categoryproduct/:category' element={<CategoryProduct />} />
                    <Route path='*' element={<ErrorPage />} />

                    {/* Payment Routing */}
                    <Route path='/success' element={<Success />} />
                    <Route path='/cancel' element={<Cancel />} />

                </Routes>
                <Footer />
                <ToastContainer />
            </Router>
        </>
    )
}

export default Routing