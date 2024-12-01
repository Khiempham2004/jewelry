import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Store.css'
const KimonoSM = () => {
    const [cart, setCart] = useState([]);
    const [quantifyKimono, setQuantityKimono] = useState(1);
    const [isModalKimono, setModalKimono] = useState(false);
    const [isCartKimono, setIsCartKimono] = useState(false);
    const [isEditting, setIsEditting] = useState(null);
    const [editItem, setEditItem] = useState(null);
    const productKimono = {
        id: 2,
        name: "Áo len Kimono SM",
        price: 330000,
        desription: " Chiếc áo len này của Kimono Club sẽ giúp tăng thêm cảm giác mềm mại cho diện mạo hằng ngày của bạn...",
    };

    const handleQuantityKimono = (value) => {
        if (quantifyKimono + value >= 1) {
            setQuantityKimono(quantifyKimono + value)
        }
        const newQuantify = Math.max(1, quantifyKimono + value);
        setQuantityKimono(newQuantify);
    };

    const handleBuyClickKimono = () => {
        setModalKimono(true);
        setCart([...cart, productKimono])
    };

    const handleCloseKimono = () => {
        setModalKimono(true)
    }

    const handleEditKimonoCart = (item) => {
        setIsEditting(item.id);
        setEditItem(item);
        console.log("Edit cart item :>>", item);
    };
    // Thêm sản phẩm vào giỏ hàng
    const addToCart = () => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === productKimono.id);
            if (existingProduct) {
                // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng
                return prevCart.map((item) =>
                    item.id === productKimono.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Nếu chưa có, thêm sản phẩm vào giỏ hàng
                return [...prevCart, { ...productKimono, quantity: 1 }];
            }
        });
    };

    const handleCheckCart = () => {
        setIsCartKimono(true);
        setModalKimono(false);
    }
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };


    return (
        <div>
            <div>
                <div className='listProduct'>
                    <Link to='/trangchu' className='linkList'>
                        Trang chủ
                    </Link>
                    <Link to='/sanpham' className='linkStore'>/ Quần áo</Link>
                    / Áo len KIMONO SM
                </div>
            </div>
            <h2 className='headingStore'> Áo len KIMONO SM</h2>
            <div className='product-container'>
                <div className="product-image">
                    <img src="https://bizweb.dktcdn.net/thumb/medium/100/128/385/products/19.jpg?v=1477537649947" alt="Product" />
                </div>
                <div className="product-info">
                    <p className="product-price">330.000₫</p>
                    <p className="product-description">
                        Chiếc áo len này của Kimono Club sẽ giúp tăng thêm cảm giác mềm mại
                        cho diện mạo hằng ngày của bạn. - Chất liệu: cotton/nylon; lớp lót:
                        polyester - Có thể giặt máy.
                    </p>

                    <div>
                        <div className="quantity-control">
                            <button onClick={() => handleQuantityKimono(-1)}>-</button>
                            <span>{quantifyKimono}</span>
                            <button onClick={() => handleQuantityKimono(1)}>+</button>
                        </div>
                        <p>{productKimono.description}</p>
                        <button onClick={() => addToCart({ ...productKimono, quantifyKimono })}>Mua hàng</button>

                        <div className='cartItem'>
                            {cart.length === 0 ? (
                                <p>Giỏ hàng của bạn đang trống</p>
                            ) : (
                                <ul>
                                    {cart.map((item) => (
                                        <li key={item.id}>
                                            - Số lượng: {item.quantity} &nbsp; <br></br>
                                            {/* <button onClick={() => handleEditCartItem(item)}>Sửa</button> */}
                                            {/* <button onClick={() => handleDeleteCartItem(item)}>Xóa</button> */}
                                            - Giá:{" "}
                                            {(item.price * item.quantity).toLocaleString()}đ
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <h3>Tổng tiền : {getTotalPrice().toLocaleString()}đ</h3>
                            <div className="product-buttons">
                                <button className="buy-button" onClick={handleBuyClickKimono}>Mua hàng</button>
                                <button className="call-button" >Gọi</button>

                                {isModalKimono && (
                                    <div style={modalStyles.overlay}>
                                        <div style={modalStyles.modal}>
                                            <div style={modalStyles.header}>
                                                <h3>Thêm vào giỏ hàng thành công</h3>
                                                <button onClick={handleCloseKimono} style={modalStyles.closeButton}>X</button>
                                            </div>
                                            <div style={modalStyles.content}>
                                                <img src="https://bizweb.dktcdn.net/thumb/medium/100/128/385/products/19.jpg?v=1477537649947" alt="Product" style={modalStyles.productImage} />
                                                <div>
                                                    <p>{productKimono.name}</p>oka  c
                                                    <p>{productKimono.price.toLocaleString()}đ</p>
                                                    <p>{productKimono.desription}</p>
                                                    <p>Tổng tiền : {getTotalPrice().toLocaleString()}đ</p>
                                                </div>
                                            </div>
                                            <div style={modalStyles.actions}>
                                                <button style={modalStyles.actionButton} onClick={handleCheckCart} >Tiếp tục mua hàng</button><hr></hr>
                                                <button style={modalStyles.actionButton} >Kiểm tra giỏ hàng</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

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

export default KimonoSM;
