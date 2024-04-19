import React from 'react';
import './login.css'

const Login = () => {

    return (
        <div>
            <h1>Tạo tài khoản </h1>
            <form>
                <div className='login'>
                    <input type='text' placeholder='Email' className='form-Login' /><br></br>
                    <input type='text' placeholder='Mật Khẩu' className='form-Login' />
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
