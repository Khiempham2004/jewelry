import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const navigate = useNavigate();

    const handleLogout = () => {
        // localStorage.removeItem('token');
        setIsLoggedIn(false); // Cập nhật trạng thái đăng xuất
        navigate('/login'); //Chuyển về trang login sau khi đăng xuất
    }

    const handleAccountClick = () => {
        navigate('/account');  //Điều hướng tới tài khoản
    };

    return (
        <div className='header'>
            <div className='search-bar'>
                <input type='text' placeholder='Tìm kiếm sản phẩm ...' />
                <i className='bx bx-search'></i>
                {/* <button className='btnHeader'>Tìm kiếm</button> */}
            </div>

            {
                isLoggedIn ? (
                    <div className='user-controls'>
                        <button className='account-button' onClick={handleAccountClick}>
                            Tài khoản
                        </button>
                        <button className='logout-button' onClick={handleLogout} >
                            Đăng xuất
                        </button>
                    </div>
                ) : (
                    <div>
                        <button onClick={() => navigate('/login')}>
                            Đăng nhập
                        </button>
                    </div>
                )
            }
        </div>
    );
}

export default Header;
