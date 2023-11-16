import React from 'react'
// import Data from '../Context/ContextData'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './NewArrival.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CurrencyFormat from '../CurrencyFormat'
import Spin from '../../Spinner/Spin';

const NewArrival = () => {
    // const { isLoading, products } = useContext(Data)

    const { isLoading, products } = useSelector(state => state.products)

    const navigate = useNavigate()

    // const currencyFormatter = (price) => {
    //     return Intl.NumberFormat("en-IN", {
    //         style: 'currency',
    //         currency: "INR"
    //     }).format(price/100)
    // }

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
        <div className='arrival'>
            <div className="arrival-heading">
                <h3 data-text="New Arrivals.">New Arrivals.</h3>
            </div>
            {/* <div className="arrival-wrapper"> */}
            <Carousel responsive={responsive}  className="arrival-wrapper">
                {isLoading ? <Spin /> :
                    products && Array.from(products).sort(() => Math.random() - Math.random()).map(elem => {
                        return (
                            <div key={elem.id} className='arrivalProducts'>
                                <div className="arrival-image">
                                    <img src={elem.image} alt={elem.name} onClick={() => navigate(`/singleproduct/${elem._id}`)} />
                                </div>
                                <span className='arrival-category'>{elem.category}</span>
                                <div>
                                    <p onClick={() => navigate(`/singleproduct/${elem.id}`)}>{elem.name.split(" ")[0]}</p>
                                    <p>{<CurrencyFormat price={elem.price} />}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel>

            {/* </div> */}
        </div >
    )
}

export default NewArrival