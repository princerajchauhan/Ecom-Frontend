import "./Login.css"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Footer from "../Components/Footer/Footer"
import Navbar from "../Components/Navbar/Navbar"

const Login = () => {
    const [value, setValue] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const clickHandle = (event) => {
        setValue({ ...value, [event.target.name]: event.target.value })
    }

    const submitForm = (e) => {
        e.preventDefault()
        // console.log(value)
        axios.post("https://prince-ecom-backend.onrender.com/api/login", value)
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
                        navigate(-1)
                    }
                }
            })
            .catch(err => console.log(err))

        setValue({
            email: '',
            password: ''
        })
    }

    return (
        <>
            <Navbar />
            <div className='login'>

                <form onSubmit={submitForm} className="glow">
                    <div className="logstyle">
                        <h2 data-text="Login...">Login...</h2>
                    </div>
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' value={value.email} onChange={clickHandle} required /><br />

                    <label htmlFor="">Password</label>
                    <input type="password" name='password' autoComplete="off" value={value.password} onChange={clickHandle} required /><br />

                    <label className="forgot">Forgot Password</label>

                    <button type='submit' className="submitBtn">Sign in</button>

                    <p>Not registered yet? <Link to="/register">Click Here</Link></p>

                </form>
            </div>
            <Footer />
        </>
    )
}

export default Login