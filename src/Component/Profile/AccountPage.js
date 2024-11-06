import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Account.css'

const AccountPage = () => {
    return (
        <div>
            <div className='listProduct'>
                <Link to='/trangchu' className='linkList'>
                    Trang chủ
                </Link>
                / Trang khách hàng
            </div>
            <div className='containerAccount'>
                <div className='headerPassword'>
                    <p>TRANG TÀI KHOẢN</p>
                    <b>Xin chào , khiêm phạm!</b>
                    <hr></hr>
                    <Link to='/account'>Thông tin tài khoản </Link><br></br>
                    <Link to='/account/order'>Đơn hàng của bạn</Link> <br></br>
                    <Link to='/account/changePassword'>Đổi mật khẩu</Link><br></br>
                    <Link to='/account/address'>Số địa chỉ</Link>
                </div>
                <div className='title'>
                    <p className='accountname'>Thông tin tài khoản</p>
                    <p ><b>Họ và tên</b> : Khiêm phạm</p>
                    <p ><b>Email</b> : phamngockhiem2004@gmail.com</p>
                </div>
            </div>
        </div>
    );
}

export default AccountPage;
