import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../StoreProduct/Store.css'

const productMadam = {
    id: 4,
    name: "Túi xách thời trang Madam",
    price: "720000đ",
    description: "Túi xách thời trang phối 2 màu trắng và đen của thương hiệu Madam Dzi - Chất liệu da tổng hợp - Kích thước 35cm x 27cm x 12cm - Quai xách đôi, cao 16cm - Quai xách đơn, dạng mắc xích, cao 29cm -...",
    image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/128/385/products/1.png?v=1474363067523"
}

const BagMadam = () => {
    const [cartMadam, setCartMadam] = useState([])
    const [isModalMadam, setIsModalMadam] = useState(false) // Trang thái Modal
    const [quantityStoreMadam, setQuantityStoreMadam] = useState(1);
    const [cartStoreMadam, setCartStoreMadam] = useState(false);

    const handleQuantityChange = (value) => {
        if (quantityStoreMadam + value >= 1) {
            setQuantityStoreMadam(quantityStoreMadam + value)
        }
        const newQuantify = Math.max(1, quantityStoreMadam + value);
        setQuantityStoreMadam(newQuantify);
    };

    const getTotalPriceMadam = () => {
        return cartMadam.reduce((total, item) => total + item.price * item.quantity, 0)
    };

    const handleCloseModalMadam = () => {
        setIsModalMadam(false)
    };

    const addToCartMadam = (productGento) => {
        setCartMadam((prevMadam) => {
            const existingProductMadam = prevMadam.find((itemCart) => itemCart.id !== productGento.id)
            if (existingProductMadam) {
                // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng
                return prevMadam.map((item) =>
                    item.id === productGento.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            } else {
                return [...prevMadam, { ...productGento, quantityStoreMadam: 1 }]
            }
        });
        setIsModalMadam(true); // Hien thi Modal
    };
    const handleEditMadamItem = (item) => {
        const newQuantityKarma = prompt("Nhập số lượng sản phẩm trong giỏ hàng :", item.quantity);
        if (newQuantityKarma) {
            setCartMadam((prevCart) =>
                prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: parseInt(newQuantityKarma, 10) }
                        : cartItem
                )
            );
        }
    };

    const handleDeleteMadamItem = (item) => {
        setCartMadam((prevMadam) => prevMadam.filter((itemMadam) => itemMadam.id !== item.id))
    };

    const handleClickCheckCartMadam = () => {
        setCartStoreMadam(true);
        setIsModalMadam(false)
    }

    return (
        <div>
            <div className='listProduct'>
                <Link to='/trangchu' className='linkList'>
                    Trang chủ
                </Link>
                <Link to='/sanpham' className='linkStore'>/ Quần áo</Link>
                / Túi xách thời trang Madam
            </div>

            <h2 className='headingMadam'>TÚI XÁCH THỜI TRANG MADAM </h2>

            <div>
                <div className="product-container">
                    <div className="product-image">
                        <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/128/385/products/1.png?v=1474363067523" alt="Product" />
                    </div>
                    <div className="product-info">
                        <div>
                            <p className="product-price">720.000₫</p>
                            <p>{productMadam.description}</p>
                            <div className="quantity-control">
                                <button onClick={() => handleQuantityChange(-1)}>-</button>
                                <span>{quantityStoreMadam}</span>
                                <button onClick={() => handleQuantityChange(1)}>+</button>
                            </div>
                            <button onClick={() => addToCartMadam({ ...productMadam, quantity: 1 })}>Mua hàng</button>

                            <div className='cartItem'>
                                {cartMadam.length === 0 ? (
                                    <p>Giỏ hàng của bạn đang trống</p>
                                ) : (
                                    <ul>
                                        {cartMadam.map((item) => (
                                            <li key={item.id}>
                                                - Số lượng: {item.quantity} &nbsp; <br></br>
                                                <button onClick={() => handleEditMadamItem(item)}>Sửa</button>
                                                <button onClick={() => handleDeleteMadamItem(item)}>Xóa</button>
                                                <br></br>
                                                - Giá: {(item.price * item.quantity).toLocaleString()}đ
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                <h3>Tổng tiền : {getTotalPriceMadam().toLocaleString()}đ</h3>
                            </div>
                        </div>

                        <div className="product-buttons">
                            {isModalMadam && (
                                <div style={modalStyles.overlay}>
                                    <div style={modalStyles.modal}>
                                        <div style={modalStyles.header}>
                                            <h3>Thêm vào giỏ hàng thành công</h3>
                                            <button onClick={handleCloseModalMadam} style={modalStyles.closeButton}>X</button>
                                        </div>
                                        <div style={modalStyles.content}>
                                            <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/128/385/products/1.png?v=1474363067523" alt="Product" style={modalStyles.productImage} />
                                            <div>
                                                <p>{productMadam.name}</p>
                                                <p>{productMadam.price.toLocaleString()}</p>
                                                <p>{productMadam.desription}</p>
                                                <p>Tổng tiền : {getTotalPriceMadam().toLocaleString()}đ</p>
                                            </div>
                                        </div>
                                        <div style={modalStyles.actions}>
                                            <button style={modalStyles.actionButton} onClick={handleClickCheckCartMadam} >Tiếp tục mua hàng</button><hr></hr>
                                            <button style={modalStyles.actionButton} >Kiểm tra giỏ hàng</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* <div className="container">
                    <div className="item">
                        <span>Hướng dẫn sử dụng</span>
                        <span className="arrow">></span>
                    </div>
                    <div className="item">
                        <span>Đánh giá chi tiết</span>
                        <span className="arrow">></span>
                    </div>
                    <div className="item">
                        <span>Đánh giá chi tiết</span>
                        <span className="arrow">></span>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
const modalStyles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "5px",
        width: "850px",
        height: "330px"
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    closeButton: {
        backgroundColor: "transparent",
        border: "none",
        fontSize: "20px",
        cursor: "pointer",
    },
    content: {
        display: "flex",
        gap: "10px",
    },
    productImage: {
        width: "180px",
        height: "160px",
    },
    actions: {
        marginTop: "10px",
        display: "flex",
        justifyContent: "space-between",
    },
    actionButton: {
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #000",
        cursor: "pointer",
    },
};

export default BagMadam;
