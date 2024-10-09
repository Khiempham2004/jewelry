import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Store.css'

const Karma = () => {
    const [cartItem, setCartItem] = useState([]);
    const [quantityStore, setQuantityStore] = useState(1);
    const [isModalStore, setModalStore] = useState(false);
    const [isCartStore, setIsCartStore] = useState(false);
    const [cartCount, setCartCount] = useState(0);

    const product = {
        id: 1,
        name: 'Áo len Karma AF',
        price: 550000,
    };

    //Thêm san pham vào giỏ hàng
    const handleQuantityChange = (value) => {
        if (quantityStore + value >= 1) {
            setQuantityStore(quantityStore + value)
        }
    };

    const handleBuyClick = () => {
        setModalStore(true);
        //Cập nhạt giỏ hàng : thêm sản phẩm mới
        setCartItem([...cartItem, product]);
    };

    //Đóng modal 
    const handleCloseModal = () => {
        setModalStore(false)
    };

    //Kiểm tra giỏ hàng : mở modal hoặc redirect đến trong giỏ hàng
    const handleCheckCart = () => {
        setIsCartStore(true); //Hiển thị giỏ hàng
        setModalStore(false); //Đóng modal
    };

    const addToCart = () => {
        setCartCount(cartCount + quantityStore); // Increment the cart count by the selected quantity
    };

    return (
        <div>
            <div className='listProduct'>
                <Link to='/trangchu' className='linkList'>
                    Trang chủ
                </Link>
                <Link to='/sanpham' className='linkStore'>/ Quần áo</Link>
                / Áo len Karma AF
            </div>

            <h2 className='headingStore'>ÁO LEN KARMA AF</h2>

            <div className="product-container">
                <div className="product-image">
                    <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/128/385/products/18.jpg?v=1477537547693" alt="Product" />
                </div>
                <div className="product-info">
                    <p className="product-price">550.000₫</p>
                    <p className="product-description">
                        Chiếc áo len này của Kimono Club sẽ giúp tăng thêm cảm giác mềm mại
                        cho diện mạo hằng ngày của bạn. - Chất liệu: cotton/nylon; lớp lót:
                        polyester - Có thể giặt máy.
                    </p>
                    <div className="quantity-control">
                        <button onClick={() => handleQuantityChange(-1)}>-</button>
                        <span>{quantityStore}</span>
                        <button onClick={() => handleQuantityChange(1)}>+</button>
                    </div>
                    <div className="product-buttons">
                        <button className="buy-button" onClick={(handleBuyClick)}>Mua hàng</button>
                        <button className="call-button" >Gọi</button>

                        {isModalStore && (
                            <div style={modalStyles.overlay}>
                                <div style={modalStyles.modal}>
                                    <div style={modalStyles.header}>
                                        <h3>Thêm vào giỏ hàng thành công</h3>
                                        <button onClick={handleCloseModal} style={modalStyles.closeButton}>X</button>
                                    </div>
                                    <div style={modalStyles.content}>
                                        <img src="https://bizweb.dktcdn.net/thumb/compact/100/128/385/products/18.jpg?v=1477537547693" alt="Product" style={modalStyles.productImage} />
                                        <div>
                                            <p>{product.name}</p>
                                            <p>Số lượng: {product.price}</p>
                                            <p>Tổng tiền: {product.price.toLocaleString()}đ</p>
                                        </div>
                                    </div>
                                    <div style={modalStyles.actions}>
                                        <button style={modalStyles.actionButton} onClick={handleCloseModal}>Tiếp tục mua hàng</button><hr></hr>
                                        <button style={modalStyles.actionButton} >Kiểm tra giỏ hàng</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {isCartStore && (
                            <div>
                                <h2>Giỏ hàng của bạn</h2>
                                {cartItem.length > 0 ? (
                                    <ul>
                                        {cartItem.map((item, index) => (
                                            <li key={index}>
                                                {item.name} - {item.price.toLocaleString()}đ
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>Giỏ hàng trống</p>
                                )}
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}


//Các style cho modal 
const modalStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        backgroundColor: '#fff',
        borderRadius: '5px',
        width: '1200px',
        position: 'relative',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'blue',
        height: '50px',
        borderRadius: '5px'
    },
    closeButton: {
        background: 'none',
        border: 'none',
        fontSize: '16px',
        cursor: 'pointer',
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '10px',
    },
    productImage: {
        width: '200px',
        marginRight: '10px',
        border: '1px solid black'
    },
    actions: {
        marginTop: '20px',
        justifyContent: 'space-between',
    },
    actionButton: {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px 488px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
    },
}
export default Karma;
