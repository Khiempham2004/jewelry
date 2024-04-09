import React from 'react';
import '../Style.css'
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div>
            <h2>Tạo tài khoản</h2>
            <form >
                <div>
                    <input type='text' placeholder='Họ' className='form-control' name='họ' />
                    <input type='email' placeholder='Email' className='form-control' name='email' />
                    <input type='password' placeholder='Mật Khẩu' className='form-control' />
                </div>
                <div>
                    <input type='name' placeholder='Tên' className='form-namephone' name='Name' /><br></br>
                    <input type='Phone' placeholder='Số điện thoại' className='form-namephone' name='Phone' />
                </div>
            </form>
            <button type='submit'>Đăng Ký</button>
        </div>
    );
}

export default Register;
