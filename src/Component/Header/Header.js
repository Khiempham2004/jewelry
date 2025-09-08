import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const navigate = useNavigate();

    const getUserInfo = () => {
        const token = localStorage.getItem("accessToken");
        if(!!token){
            
        }
    }

    // life cycles react
    useEffect(() => {
        getUserInfo()
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false); // Cập nhật trạng thái đăng xuất
        navigate('/login'); //Chuyển về trang login sau khi đăng xuất
    }

    const handleAccountClick = () => {
        navigate('/account');  //Điều hướng tới tài khoản
    };
    return (
        <div>
            {/* <div className='header'>
            <div className='search-bar'>
                <input type='text' placeholder='Tìm kiếm sản phẩm ...' />
                <i className='bx bx-search'></i>
                <button className='btnHeader'>Tìm kiếm</button>
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
             */}
            <div>
                <div className="offcanvas offcanvas-start" id="demo">
                    <div>
                        <div className='search'>
                            <input
                                type='text'
                                // value={searchQuery}
                                // onChange={handleSearchChange}
                                placeholder='Tìm kiếm sản phẩm...' />
                        </div>
                        <div className='cart'>
                            {/* {
                                filteredItems.length > 0 ? (
                                    <ul>
                                        {filteredItems.map(item => (
                                            <li key={item.id}>
                                                {item.name} - ${item.price}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p></p>
                                )
                            } */}
                        </div>
                    </div>

                    <hr></hr>

                    <div className="offcanvas-header">
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
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                    </div>
                    <hr></hr>
                    <div className="offcanvas-body">
                        <p><Link to='/trangchu' className='form' >Trang Chủ</Link></p>
                        <hr></hr>
                        <p><Link to='/sanpham' className='form'>Sản Phẩm</Link></p>
                        <hr></hr>
                        <p><Link to='/blog' className='form'>Blog</Link></p>
                        <hr></hr>
                        <p><Link to='/gioithieu' className='form'>Giới Thiệu</Link></p>
                    </div>
                </div>
                <div className="btn btn-primary" id='thoitrang'>
                    <button id='open' type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                        <i className='bx bx-signal-3'></i>
                    </button>
                    <div className='store'>
                        <Link to='/' className='gento'>Gento Store</Link>
                        <Link to='/cart' className='cart'>
                            {/* <box-icon name='cart' ></box-icon> */}
                            <i class='bx bx-cart'></i>
                        </Link>
                    </div>
                </div>
                <div className='search'>
                    <input type='text' placeholder='Tìm kiếm sản phẩm...' />
                </div>
            </div>
        </div>
    );
}

export default Header;
