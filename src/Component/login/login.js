import React, { useState } from 'react';
import './login.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const handleChangeLogin = {
    email: "",
    password: ""
}

const isEmptyLogin = (value) => {
    return !value || value.trim().length < 1;
}

const Login = () => {
    const [login, setLogin] = useState(handleChangeLogin)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({})

    const navigate = useNavigate('');

    const validateLogin = () => {
        const error = {};
        if (isEmptyLogin(login.password)) {
            error["Password"] = "Password is required"
        }
        setError(error);
        return Object.keys(error).length === 0;
    };

    const handleEmail = (event) => {
        const { value } = event.target;
        setLogin({
            ...login,
            email: value,
        })
    }

    const handlePassword = (event) => {
        const { value } = event.target;
        setLogin({
            ...login,
            password: value,
        })
    }

    // const handleClickLogin = async (e) => {
    //     e.preventDefault();
    //     const clickFormLogin = {
    //         email,
    //         password: handlePassword,
    //     }
    //     try {
    //         await axios.post('/http://localhost:9000/gento/login' )
    //         navigate('/trangchu')
    //         alert('You have not filled out the logintration correctly.')
    //         console.log('login form : ', clickFormLogin);
    //     } catch (error) {
    //         console.log('Error login : ', error);
    //         alert('You have not filled out the loginstration correctly.')
    //     }
    // }

    const handleClickForm = (event) => {
        event.preventDefault()
        if (validateLogin()) {
            navigate('/header')
            alert('You have login successfully!"')
        } else (
            alert('There are errors in the form, please check!')
        )
    }

    return (
        <div className='login-container'>
            <h1>Create account</h1>
            <form id='form' className='' onSubmit={handleClickForm}>
                <div className='login'>
                    <input value={login.email} type='text' onChange={handleEmail} placeholder='Email' className='form-Login' /><br></br>
                    <input value={login.password} onChange={handlePassword} type='Password' placeholder='Password' className='form-Login' />
                </div>
                <br></br>
                <button type='submit' className='buttonLogin'>Login</button>
                <div className='accountGento'>
                    <p>No account yet? <Link to='/register'>Register</Link></p>
                </div>
            </form>
        </div>
    );
}

export default Login;
