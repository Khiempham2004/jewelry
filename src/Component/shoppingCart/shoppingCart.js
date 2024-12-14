import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './shoppingCart.css'
//  import Index from '../../pages/Following';

const ShoppingCart = () => {

    const product = {
        id: 1,
        name: 'Áo len Kimono SM',
        price: 330000,
        desription: " Chiếc áo len này của Kimono Club sẽ giúp tăng thêm cảm giác mềm mại cho diện mạo hằng ngày của bạn...",
        image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/128/385/products/19.jpg?v=1477537649947",
    };
    const [cart , setCart] = useState([])
    const [quantity, setQuantity] = useState(0);
    const [isModalVisiable, setModalVisiable] = useState(false)

    // const price = 5000;
    // const totalPrice = quantity * price;

    // const handleBuyClick = () => {
    //     setModalVisiable(true)
    // }

    // const handleCloseModal = () => {
    //     setModalVisiable(false);
    // };

    return (
        <div>
            <div className="">
                <div className='listProduct'>
                    <Link to='/trangchu' className='linkList'>
                        Trang chủ
                    </Link>
                    / Giỏ hàng
                </div>

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
                    {cart.length === 0 ? (
                        <p>Giỏ hàng trống</p>

                    ) : (
                        <ul>
                            {cart.map((item, index) => (
                                <li key={index}>
                                    {item.name} - {item.price}₫
                                </li>
                            ))}
                        </ul>
                    )}
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

            {/* <div>
                <h2>Gior hàng</h2>
                {cart.length === 0 ? (
                    <p>Giỏ hàng trống</p>
                ) : (
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                )
                }
            </div> */}
        </div>
    );
}


export default ShoppingCart;
