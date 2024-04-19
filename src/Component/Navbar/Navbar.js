import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style.css'

const Navbar = () => {

    return (
        <div>
            <div className="offcanvas offcanvas-start" id="demo">
                <div>
                    <div className='search'>
                        <input type='text' placeholder='Tìm kiếm sản phẩm...' />
                    </div>
                </div>
                <hr></hr>
                <div className="offcanvas-header">
                    <p><Link to='/login' className='form' >Đăng Nhập</Link></p>
                    <p ><Link to='/register' className='form'>Đăng Ký</Link></p>
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
                    <Link to='/trangchu' className='gento'>Gento Store</Link>
                    <Link to='/cart' className='cart'>
                        <box-icon name='cart-alt' ></box-icon>
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

