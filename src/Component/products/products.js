import React from 'react';
import { Link } from 'react-router-dom';
import './products.css'
const Products = () => {
    return (
        <div>
            <div className='Storelogo'>
                <div className='logo'>
                    <div className='image'>
                        <Link to='/karma' className='sweater'>
                            <img className='' src='https://bizweb.dktcdn.net/thumb/medium/100/128/385/products/18.jpg?v=1477537547693' alt='logo' />
                            <h3 className='heading'>Áo len karma AF</h3>
                        </Link>
                        <div className='money'>
                            550.000đ
                        </div>
                    </div>
                    <div className='contruct'>
                        <Link to='/kimono' className='sweater'>
                            <img className='' src=' https://bizweb.dktcdn.net/thumb/medium/100/128/385/products/19.jpg?v=1477537649947' alt='logo' />
                            <h3 className='heading'>Áo len kimono SM</h3>
                        </Link>
                        <div className='money'>
                            330.000đ <br></br>
                            <del>400.000đ</del>
                        </div>
                    </div>
                    <div className='contruct'>
                        <Link to='/KSUMI' className='sweater'>
                            <img className='' src='https://bizweb.dktcdn.net/thumb/medium/100/128/385/products/3.jpg?v=1477537685450' alt='logo' />
                            <h3 className='heading'>Áo len KSUMI</h3>
                        </Link>
                        <div className='money'>
                            330.000đ <br></br>
                            <del>400.000đ</del>
                        </div>
                    </div>
                </div>
            </div>

            <div className='logogento'>
                <div className='image'>
                    <Link to='/KSUMI' className='sweater'>
                        <img className='gentosweater' src='https://bizweb.dktcdn.net/thumb/medium/100/128/385/products/1.png?v=1474363067523' alt='logo' />
                        <h3 className='heading'>Túi xách thời trang Madam</h3>
                    </Link>
                    <div className='moneygento'>
                        330.000đ <br></br>
                    </div>
                </div>
                <div className='contruct'>
                    <Link to='/Lunarglide' className='sweater'>
                        <img className='gentosweater' src=' https://bizweb.dktcdn.net/thumb/medium/100/128/385/products/g20min.jpg?v=1474363088393' alt='logo' />
                        <h3 className='heading'>Giày chạy bộ nữ Nike Lunarglide</h3>
                    </Link>
                    <div className='moneygento'>
                        500.000đ
                    </div>
                </div>
                <div className='contruct'>
                    <Link to='/Lunarglide' className='sweater'>
                        <img className='gentosweater' src=' https://bizweb.dktcdn.net/thumb/medium/100/128/385/products/2.jpg?v=1477537930627' alt='logo' />
                        <h3 className='heading'>Áo khoác gió Moza</h3>
                    </Link>
                    <div className='moneygento'>
                        330.000đ<br></br>
                        <del>400.000đ</del>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Products;
