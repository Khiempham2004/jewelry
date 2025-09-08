import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState({});

    const navigate = useNavigate('');

    const validateLogin = () => {
        const error = {};
        if (!password || password.trim().length < 1) {
            error["Password"] = "Password is required"
        }
        setError(error);
        return Object.keys(error).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateLogin()) {
            return alert('There are errors in the form, please check!');
        }

        const clickFormLogin = {
            email: email,
            password: password,
        };

        try {
            const result = await axios.post('http://localhost:9000/gento/login', clickFormLogin);
            console.log(result, "result");
            const tokenGento = result.data.tokenGento;

            // Lưu token vào locakStorage 
            if (!!tokenGento) {
                localStorage.setItem("accessToken", tokenGento);
            };

            navigate('/trangchu');
            alert("You have login successfully!")
        } catch (error) {
            console.error("Login error:", error.response?.data || error.message);
            alert('You have not filled out the loginstration correctly.')
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="login-title">Đăng Nhập</h2>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Nhập email của bạn"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Mật khẩu</label>
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Nhập mật khẩu"
                        />
                        <span
                            className="toggle-password"
                            onClick={() => setShowPassword(!showPassword)}
                            title={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                        >
                            {showPassword ? '🙈' : '👁️'}
                        </span>
                    </div>
                </div>
                <button className="login-btn" type="submit">Đăng Nhập</button>
                <div className="login-footer">
                    <a href="#">Quên mật khẩu?</a>
                    <span> | </span>
                    <Link to="/register">Đăng ký</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
