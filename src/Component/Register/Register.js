import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import './Register.css';

const registerSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("This filed is required"),
    username: yup.string().required("This filed is required"),
    password: yup.string().required("This filed is required")
})

const registerForm = {
    email: "",
    uername: "",
    password: "",
}
const isEmptyRegister = (value) => {
    return !value || value.trim().length < 1;
}

const Register = () => {
    const [formRegister, setFormRegister] = useState(registerForm)
    const [email, setEmail] = useState('')
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [formError, setFormError] = useState({});

    const navigate = useNavigate();

    const validateForm = () => {
        const error = {};

        if (isEmptyRegister(formRegister.password)) {
            error["Password"] = "";
        }
        if (isEmptyRegister(formRegister.email)) {
            error["Email"] = "";
        }
        setFormError(error);
        return Object.keys(error).length === 0;
    };

    const handleEmail = (event) => {
        const { value } = event.target;
        setFormRegister({
            ...formRegister,
            email: value,
        });
    };

    const handleUserName = (event) => {
        const { value } = event.target;
        setFormRegister({
            ...formRegister,
            userName: value,
        })
    };

    const handlePassword = (event) => {
        const { value } = event.target;
        setFormRegister({
            ...formRegister,
            password: value,
        });
    };

    const handleClickRegister = async (e) => {
        e.preventDefault();
        const registerData = {
            email: "your_email@gmail.com",
            username: "your_username",
            password: "your_password",
        };

        try {
            const response = await axios.post("http://localhost:9000/gento/register", registerData);
            console.log("Registation  Response : " , response.data);
            
            // Lưu  token vào localStorage
            localStorage.setItem("auToken :>> " , response.data.token)
            navigate('/login')
            alert("You have successfully registered")
            console.log("Form registering ", registerData);
        } catch (error) {
            console.error('Error regitering form  ',error.response?.data || error.message)
            alert(error.response?.data?.message  || "You have not filled out the registration correctly.")
        }
    };

    // const handleClickForm = (event) => {
    //     event.preventDefault()
    //     if (validateForm()) {
    //         navigate("/login");
    //         console.log("formValue", formRegister)
    //         alert('You have Register successfully logged ! ');
    //     } else {
    //         alert('This is an error alert - check it out')
    //     }
    // }

    return (
        <div>
            <div className='listProduct'>
                <Link to='/trangchu' className='linkList'>
                    Trang chủ
                </Link>
                <Link to='/register' className='registerGento'> / Đăng ký tài khoản</Link>
            </div>

            <div>
                <div className='register-heading'>
                    <form action='' onSubmit={handleClickRegister}>
                        <h1 className=''>Register</h1>
                        <div className="container">
                            <p className='singofLogin'>Please fill in this form to create an account.</p>
                            <hr></hr>

                            <label><b>Email</b></label>
                            <input type="text" value={formRegister.email} onChange={handleEmail} placeholder="Enter Email" name="email" id="email" required />

                            <label><b>UserName</b></label><br></br>
                            <input type="username" value={formRegister.userName} onChange={handleUserName} placeholder="username" id='password' name="username" required />
                            <br></br>
                            <label><b>Password</b></label>
                            <input type="password" value={formRegister.password} onChange={handlePassword} placeholder="Password" name="psw-repeat" id="psw-repeat" required />
                            <hr></hr>
                            <p>By creating an account you agree to our <Link to=''>Terms & Privacy</Link>.</p>

                            <button type="submit" className="registerbtn" >Register</button>
                        </div>

                        <div className="container signin">
                            <p >Already have an account? <Link to='/register'>Sign in</Link>.</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
