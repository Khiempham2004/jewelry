import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './products.css'
import 'boxicons';

const itemsPerPage = 2;

const imageProduct = [
    {
        id: 1,
        name: 'Áo Len Karma AF',
        price: 550000,
        description: 'Chiếc áo len của Kimono Club...',
        image: 'path_to_image',
    },
]


const Products = (items) => {
    const [currentPage, setCurrentPage] = useState(1);
    // const validItems = Array.isArray(items) ? items : [];
    const totalPages = Math.ceil(items.length / itemsPerPage);;
    const [cart, setCart] = useState([]);

    const addToCart = () => {
        setCart([...cart, imageProduct]);
    }

    const startIndex = (currentPage - 1) * itemsPerPage;

    return (
        <div>
            <div className='gentolist'>
                <p className='listproducts'>Tất cả các sản phẩm</p>
                <p className='gentoproduct'>Tìm thấy  <b>12</b> sản phẩm</p>
            </div>
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
                        </div>
                    </div>
                    <div className='contruct'>
                        <Link to='/KSUMI' className='sweater'>
                            <img className='' src='https://bizweb.dktcdn.net/thumb/medium/100/128/385/products/3.jpg?v=1477537685450' alt='logo' />
                            <h3 className='heading'>Áo len KSUMI</h3>
                        </Link>
                        <div className='money'>
                            330.000đ <br></br>
                        </div>
                    </div>
                </div>
            </div>

            <div className='logogento'>
                <div className='image'>
                    <Link to='/Madam' className='sweater'>
                        <img className='gentosweater' src='https://bizweb.dktcdn.net/thumb/medium/100/128/385/products/1.png?v=1474363067523' alt='logo' />
                        <h3 className='heading'>Túi xách thời trang Madam</h3>
                    </Link>
                    <div className='moneygento'>
                        720.000đ <br></br>
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
                    <Link to='/Moza' className='sweater'>
                        <img className='gentosweater' src=' https://bizweb.dktcdn.net/thumb/medium/100/128/385/products/2.jpg?v=1477537930627' alt='logo' />
                        <h3 className='heading'>Áo khoác gió Moza</h3>
                    </Link>
                    <div className='moneygento'>
                        330.000đ<br></br>
                        <del>400.000đ</del>
                    </div>
                </div>
            </div>

            <div className='logogento'>
                <div className='image'>
                    <Link to='/ShoesDT' className='sweater'>
                        <img className='gentosweater' src='https://bizweb.dktcdn.net/thumb/medium/100/128/385/products/23.jpg?v=1477539007020' alt='logo' />
                        <h3 className='heading'>Giày thể thao nữ DT</h3>
                    </Link>
                    <div className='moneygento'>
                        45.000đ <br></br>
                    </div>
                </div>
                <div className='contruct'>
                    <Link to='/Fashion-Bag' className='sweater'>
                        <img className='gentosweater' src=' https://bizweb.dktcdn.net/thumb/medium/100/128/385/products/24.jpg?v=1477539052267' alt='logo' />
                        <h3 className='heading'>Túi xách thời trang nắng gập</h3>
                    </Link>
                    <div className='moneygento'>
                        250.000đ
                    </div>
                </div>
                <div className='contruct'>
                    <Link to='/CurvStar' className='sweater'>
                        <img className='gentosweater' src=' https://bizweb.dktcdn.net/thumb/medium/100/128/385/products/5.jpg?v=1477539127913' alt='logo' />
                        <h3 className='heading'>Túi xách thời trang CurvStar</h3>
                    </Link>
                    <div className='moneygento'>
                        330.000đ<br></br>
                        <del>400.000đ</del>
                    </div>
                </div>
            </div>

            <div className='logogento'>
                <div className='image'>
                    <Link to='Gucci' className='sweater'>
                        <img className='gentosweater' src='https://bizweb.dktcdn.net/thumb/medium/100/128/385/products/26-cc10f782-8207-46f0-ae9c-c642eaab1a16.jpg?v=1477539288820' alt='logo' />
                        <h3 className='heading'>Túi xách gucci</h3>
                    </Link>
                    <div className='moneygento'>
                        750.000đ <br></br>
                    </div>
                </div>
                <div className='contruct'>
                    <Link to='/Chenal' className='sweater'>
                        <img className='gentosweater' src=' https://bizweb.dktcdn.net/thumb/medium/100/128/385/products/25-badd8f50-3380-4075-8825-d652ec713ecd.jpg?v=1477539238647' alt='logo' />
                        <h3 className='heading'>Túi xách thời trang Chenal</h3>
                    </Link>
                    <div className='moneygento'>
                        750.000đ
                    </div>
                </div>
                <div className='contruct'>
                    <Link to='/Prowin' className='sweater'>
                        <img className='gentosweater' src=' https://bizweb.dktcdn.net/thumb/medium/100/128/385/products/28.jpg?v=1477539363440' alt='logo' />
                        <h3 className='heading'>Giày cao cổ Prowin</h3>
                    </Link>
                    <div className='moneygento'>
                        1.200.000đ<br></br>
                    </div>
                </div>
            </div><br></br>
            <br></br>

            <div className="item-container">
                {/* {currentItems.map((item, index) => (
                    <div key={index} className="item">
                        <img src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                    </div>
                ))} */}
            </div>
            <div className='pageGento'>
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className='page-link'
                >
                    Trang trước</button>
                <span className="current-page">{`${currentPage}/${totalPages}`}</span>
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className='page-link'
                >Trang sau</button>
            </div>
        </div>
    );
}

export default Products;
