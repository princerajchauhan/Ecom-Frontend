import "./Register.css"
import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"

const Signup = ({updateUser} ) => {
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
        axios.post("http://localhost:4005/api/register", value)
        .then(res => {
            alert(res.data.msg)
            // if (res.data.detail) {
            //     updateUser(res.data.detail)
            //     localStorage.setItem("Token",res.data.token)
            //     navigate("/")
            // }
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
        <div className='register'>
            <form onSubmit={submitForm} method='POST'>

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
    )
}

export default Signup