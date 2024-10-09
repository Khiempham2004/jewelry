import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style.css';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "product 1", price: 100 },
        { id: 2, name: "product 2", price: 200 },
        { id: 3, name: "product 3", price: 300 },
    ]);
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredItems = cartItems.filter(item =>
        item.name.toLowerCase().includes()
    )

    return (
        <div>
            <div className="offcanvas offcanvas-start" id="demo">
                <div>
                    <div className='search'>
                        <input
                            type='text'
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder='Tìm kiếm sản phẩm...' />
                    </div>
                    <div className='cart'>
                        {
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
                        }
                    </div>
                </div>

                <hr></hr>

                <div className="offcanvas-header">
                    <p><Link to='/login' className='form-login' >Đăng Nhập</Link></p>
                    <p ><Link to='/register' className='form-register'>Đăng Ký</Link></p>
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
    );
}

export default Navbar;

