import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Account.css'

const AccountPage = () => {
    // const [selectedTab, setSelectedTab] = useState('info'); // Mặc định hiển thị thông tin tài khoản

    // const handleTabClick = (tab) => {
    //     setSelectedTab(tab);
    // };

    // const renderTabContent = () => {
    //     switch (selectedTab) {
    //         case 'info':
    //             return <div>Thông tin chi tiết về tài khoản</div>;
    //         case 'orders':
    //             return <div>Danh sách đơn hàng của bạn</div>;
    //         case 'password':
    //             return <div>Form đổi mật khẩu</div>;
    //         case 'addresses':
    //             return <div>Danh sách địa chỉ</div>;
    //         default:
    //             return null;
    //     }
    // };
    return (
        <div>
            <div className='listProduct'>
                <Link to='/trangchu' className='linkList'>
                    Trang chủ
                </Link>
                / Trang khách hàng
            </div>
            <div className='containerAccount'>
                <div className='header'>
                    <p>TRANG TÀI KHOẢN</p>
                    <b>Xin chào , khiêm phạm!</b>
                    <hr></hr>
                    <Link to='/account'>Thông tin tài khoản </Link><br></br>
                    <Link to='/account/order'>Đơn hàng của bạn</Link>
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
