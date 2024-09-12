import React, { useState } from 'react';
import './login.css'
import { useNavigate } from 'react-router-dom';

const handleChangeLogin = {
    Email: "",
    Password: ""
}

const isEmptyLogin = (value) => {
    return !value || value.trim().length < 1;
}

const Login = () => {
    const [login, setLogin] = useState(handleChangeLogin)
    const [error, setError] = useState({})
    const navigate = useNavigate();

    const validateLogin = () => {
        const error = {};
        if (isEmptyLogin(login.Password)) {
            error["Password"] = "Password is required"
        }
        setError(error);
        return  Object.keys(error).length === 0;
    };
    
    const handleEmail = (event) => {
        const { value } = event.target;
        setLogin({
            ...login,
            Email: value,
        })
    }

    const handlePassword = (event) => {
        const { value } = event.target;
        setLogin({
            ...login,
            Password: value,
        })
    }

    

    const handleClickForm = (event) => {
        event.preventDefault()
        if (validateLogin()) {
            navigate('/trangchu')
            alert('You have login successfully!"')
        } else (
            alert('There are errors in the form, please check!')
        )
    }


    return (
        <div>
            <h1>Tạo tài khoản </h1>
            <form id='form' className='' onSubmit={handleClickForm}>
                <div className='login'>
                    <input value={login.Email} type='text' onChange={handleEmail} placeholder='Email' className='form-Login' /><br></br>
                    <input value={login.Password} onChange={handlePassword} type='Password' placeholder='Password' className='form-Login' />
                </div>
                <div className='check'>
                    <input type='checkbox' />
                    <span>Lưu mật khẩu</span>
                </div>
                <br></br>
                <button type='submit' className='buttonLogin'>Login</button>
            </form>
        </div>
    );
}

export default Login;
