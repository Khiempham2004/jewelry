import React from 'react';
import { Link } from 'react-router-dom';
import './products.css'
const ProductsList = () => {
    return (
        <div className='listProduct'>
            <Link to='/trangchu' className='linkList'>
                Trang chủ
            </Link>
            / Tất cả sản phẩm
        </div>
    );
}

export default ProductsList;
