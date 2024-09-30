import React from 'react';
import { Link } from 'react-router-dom';
const BlogHome = () => {
    return (
        <div>
            <div className='listProduct'>
                <Link to='/trangchu' className='linkList'>
                    Trang chủ
                </Link>
                / Tin tức
            </div>
        </div>
    );
}

export default BlogHome;
