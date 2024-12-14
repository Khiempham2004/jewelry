import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
// import { Authcontext } from './Authcontext';

const isEmptyLogin = (value) => {
    return !value || value.trim().length < 1;
}


const Login = () => {
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });
    // const {login} = useContext(Authcontext);
    const [error, setError] = useState({})
    const [name, setName] = useState("");

    const navigate = useNavigate('');

    // const handleLogin = () => {
    //     if (name) {
    //         login(name); // Goi ham login va truyen ten tai khoan
    //     }
    // };


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

    const handleOnLogin = async () => {
        const clickFormLogin = {
            email: login.email,
            password: login.password,
        };
        
        try {
            const result =  await axios.post('http://localhost:9000/gento/sign-in', clickFormLogin);
            console.log(result, "result")
            const tokenGento = result.data.tokenGento;

            if(!!tokenGento){
                localStorage.setItem("accessToken", tokenGento);
            };

            navigate('/trangchu')
        } catch (error) {
            console.log('Error login : ', error);
            // alert('You have not filled out the loginstration correctly.')
        }
    }

    const handleSubmitForm = (event) => {
        event.preventDefault()
        if (validateLogin()) {
            handleOnLogin()
            // navigate('/account')
            // alert('You have login successfully!"')
        } else (
            alert('There are errors in the form, please check!')
        )
    }

    return (
        <div>
            <div className='listProduct'>
                <Link to='/trangchu' className='linkList'>
                    Trang chủ
                </Link>
                <Link to='/register' className='registerGento'> / Đăng nhập tài khoản</Link>
            </div>
            <div className='login-container'>
                <h1>Create account</h1>
                <form id='form' className='' onSubmit={handleSubmitForm}>
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
        </div>
    );
}

export default Login;
