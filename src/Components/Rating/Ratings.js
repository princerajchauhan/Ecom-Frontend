import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import './Rating.css'

const Ratings = ({ stars, reviews }) => {
    const rating = Array.from({ length: 5 }, (v, i) => {
        let num = i + 0.5
        return (
            <span key={i}>
                {
                    stars >= i + 1 ? <BsStarFill className="rating-icon" /> : stars >= num ? <BsStarHalf className="rating-icon" /> : <BsStar className="rating-icon" />
                }
            </span>)

    })
    return (
        <div className="rating-main">
            <span> {stars} </span>
            <span> {rating} </span>
            <span>  ( {reviews} reviews )</span>
        </div>
    )
}

export default Ratings