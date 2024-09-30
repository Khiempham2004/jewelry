import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './shoppingCart.css'

const ShoppingCart = () => {
    const [quantity, setQuantity] = useState(1);
    const [isModalVisiable, setModalVisiable] = useState(false)

    const price = 5000;
    const totalPrice = quantity * price;

    const handleBuyClick = () => {
        setModalVisiable(true)
    }

    const handleCloseModal = () => {
        setModalVisiable(false);
    };
    return (
        <div>
            <div className="">
                <div className='listProduct'>
                    <Link to='/trangchu' className='linkList'>
                        Trang chủ
                    </Link>
                    / Giỏ hàng
                </div>
                {/* 
                <div className="cart-container">
                    <h1>ÁO LEN KARAMA AF </h1>
                    <div className="">
                        <h3 className="">
                            Số lượng sản phẩm trong giỏ hàng: {quantity}
                        </h3>
                    </div>

                    <div className="product">
                        <img
                            src="https://bizweb.dktcdn.net/thumb/medium/100/128/385/products/18.jpg?v=1477537547693"
                            alt="Product"
                            className="w-16 h-16 rounded-full"
                        />
                        <div className="">
                            <h4 className="">Áo len Karma AF</h4>
                            <p className="">550.000₫</p>
                        </div>
                        <input
                            type="number"
                            className=""
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                        />
                        <button className="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="">
                        <p className="">Thành tiền</p>
                        <p className="">
                            {totalPrice.toLocaleString()}₫
                        </p>
                    </div>

                    <div className="">
                        <p className="">Phí vận chuyển</p>
                        <p className="">Tính lúc thanh toán</p>
                    </div>

                    <div className="total">
                        <p className="">Tổng tiền</p>
                        <p className="">
                            {totalPrice.toLocaleString()}₫
                        </p>
                    </div>

                    <div className="actions">
                        <button className="sanpham">
                            <Link to='/sanpham'>Tiếp tục mua sắm</Link>
                        </button><br></br>
                        <button className="">
                            Cập nhật giỏ hàng
                        </button><br></br>
                        <button className="">
                            Tiến hành thanh toán
                        </button>
                    </div>
                </div> */}


            </div>
            <div>
                <h1 className='headingCart'>Giỏ hàng</h1>
                <div className="gio-hang">
                    <p className='cartIterm'>Số lượng sản phẩm trong giỏ hàng: {quantity}</p>
                    <div className="san-pham">
                        <img src="https://bizweb.dktcdn.net/thumb/medium/100/128/385/products/18.jpg?v=1477537547693" width='190px' alt="Áo len Karma AF" />
                        <div className="thong-tin-san-pham">
                            <h3>Áo len Karma AF</h3>
                            <p>550.000₫</p>
                            <input
                                type="number"
                                className="inp"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                            />
                            <button className="btn-xoa">X</button>
                        </div>
                    </div>
                    <br></br>
                    <div className="tong-tien">
                        <p>Thành tiền:
                            {totalPrice.toLocaleString()}₫
                        </p>
                        <p className=""> Tổng tiền :
                            {totalPrice.toLocaleString()}₫
                        </p>
                    </div>
                </div>
                <div className="actions">
                    <button className="productcart">
                        <Link to='/sanpham'>Tiếp tục mua sắm</Link>
                    </button>
                    <hr></hr>
                    <button className="sanpham">
                        Cập nhật giỏ hàng
                    </button><hr></hr>
                    <button className="sanpham">
                        Tiến hành thanh toán
                    </button>
                </div>
            </div>
        </div>
    );
}


export default ShoppingCart;
