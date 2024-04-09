import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'
const Login = () => {

    return (
        <div>
            <h1>Tạo tài khoản </h1>
            <form>
                <div className='login'>
                    <input type='text' placeholder='Email' className='form-Login' /><br></br>
                    <input type='text' placeholder='Mật Khẩu' className='form-login' />
                </div>
            </form>
            <div className='check'>
                <input type='checkbox' />
                <span>Lưu mật khẩu</span>
            </div>
            <button type='submit'>Đăng Nhập</button>
        </div>
    );
}

export default Login;
