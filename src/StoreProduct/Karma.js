import React from 'react';
import { Link } from 'react-router-dom';


const Karma = () => {
    return (
        <div>
            <div className='listProduct'>
                    <Link to='/trangchu' className='linkList'>
                        Trang chủ
                    </Link>
                    <Link to='/sanpham' className=''>Sản phẩm</Link>
                    / Giỏ hàng
                </div>
        </div>
    );
}

export default Karma;
