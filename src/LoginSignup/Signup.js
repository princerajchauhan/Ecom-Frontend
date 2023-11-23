import "./Register.css"
import React, { useState } from 'react'
import axios from 'axios'
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"
import Footer from "../Components/Footer/Footer"
import Navbar from "../Components/Navbar/Navbar"

const Signup = () => {
    const [value, setValue] = useState({
        name: '',
        phone: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const clickHandle = (event) => {
        // setValue({...value, [event.target.name]: event.targt.value})
        setValue({ ...value, [event.target.name]: event.target.value })
    }

    const submitForm = (event) => {
        event.preventDefault()
        console.log("Form Submitted...")
        // console.log(value)
        axios.post("https://prince-ecom-backend.onrender.com/api/register", value)
            .then(res => {
                if (!res.data.msg2) {
                    toast(res.data.msg, { type: "error", theme: "colored" });
                }
                else {
                    toast(res.data.msg, { type: "success", theme: "colored" });
                    if (res.data.token) {
                        // setUserName(res.data.name)
                        localStorage.setItem("Token", res.data.token)
                        localStorage.setItem("name", res.data.name)
                        localStorage.setItem("id", res.data.id)
                        navigate("/")
                    }
                }
            })
            .catch(err => console.log(err))
        setValue({
            name: '',
            phone: '',
            email: '',
            password: ''
        })

    }

    return (
        <>
            <Navbar />
            <div className='register'>
                <form onSubmit={submitForm} method='POST' className="glow">

                    <div className="registStyle">
                        <h2 data-text="Register Here">Register Here</h2>
                    </div>

                    <label htmlFor="">Name</label>
                    <input type="text" name='name' value={value.name} onChange={clickHandle} required /><br />

                    <label htmlFor="">Phone</label>
                    <input type="number" name='phone' value={value.phone} onChange={clickHandle} required /><br />

                    <label htmlFor="">Email</label>
                    <input type="email" name='email' value={value.email} onChange={clickHandle} required /><br />

                    <label htmlFor="">Password</label>
                    <input type="password" name='password' autoComplete="off" value={value.password} onChange={clickHandle} required /><br />

                    <input type="Submit" value="Register" />

                    <p>ALready registered? <Link to="/login">Click Here</Link></p>

                </form>
            </div>
            <Footer />
        </>
    )
}

export default Signup