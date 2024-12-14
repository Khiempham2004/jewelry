import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './Store.css'
import '../StoreProduct/Karma.css'

const productKarma = {
    id: 1,
    name: 'Áo len Karma AF',
    price: 550000,
    desription: " Chiếc áo len này của Kimono Club sẽ giúp tăng thêm cảm giác mềm mại cho diện mạo hằng ngày của bạn...",
    image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/128/385/products/18.jpg?v=1477537547693",
};


const Karma = () => {
    const [cartItem, setCartItem] = useState([]);
    const [newCartKarma, setCartKarma] = useState([productKarma])
    const [quantityStore, setQuantityStore] = useState(1);
    const [isModalKarma, setModalKarma] = useState(false); // Trang thai modal
    const [isCartStore, setIsCartStore] = useState(false);

    // //Thêm san pham vào giỏ hàng
    const handleQuantityChange = (value) => {
        if (quantityStore + value >= 1) {
            setQuantityStore(quantityStore + value)
        }
        const newQuantify = Math.max(1, quantityStore + value);
        setQuantityStore(newQuantify);
    };

    const handleBuyClick = () => {
        setModalKarma(true);
        //Cập nhạt giỏ hàng : thêm sản phẩm mới
        setCartKarma([...cartItem, 1]);
    };

    const handleEditKarmaItem = (item) => {
        const newQuantityKarma = prompt("Nhập số lượng sản phẩm trong giỏ hàng :", item.quantity);
        if (newQuantityKarma) {
            setCartItem((prevCart) =>
                prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: parseInt(newQuantityKarma, 10) }
                        : cartItem
                )
            );
        }
    };

    const handleDeleteKarmaItem = (item) => {
        setCartItem((prevCart) => prevCart.filter((itemCart) => itemCart.id !== item.id));
    };

    //Đóng modal 
    const handleCloseModal = () => {
        setModalKarma(false);
    };

    //Kiểm tra giỏ hàng : mở modal hoặc redirect đến trong giỏ hàng
    const handleCheckCart = () => {
        setIsCartStore(true);
        setModalKarma(false);
    };


    // Thêm sản phẩm vào giỏ hàng
    const addToCart = (product) => {
        // setCartItem((prevCart) => {
        //     const existingProduct = prevCart.find((item) => item.id === product.id);
        //     if (existingProduct) {
        //         // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng
        //         return prevCart.map((item) =>
        //             item.id === productKarma.id
        //                 ? { ...item, quantity: item.quantity + productKarma.quantity }
        //                 : item
        //         );
        //     }
        //     return [...prevCart, { ...product, quantityStore: product.quantityStore || 1 }];
        // });
        setCartItem((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Nếu chưa có, thêm sản phẩm vào giỏ hàng
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
        setModalKarma(true); // Hiển thị modal  
    };

    // Hàm tính tổng
    const getTotalPriceKarma = () => {
        return cartItem.reduce((total, item) => total + item.price * item.quantity, 0);
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

                    <div>
                        <div className="quantity-control">
                            <button onClick={() => handleQuantityChange(-1)}>-</button>
                            <span>{quantityStore}</span>
                            <button onClick={() => handleQuantityChange(1)}>+</button>
                        </div>
                        <p>{productKarma.description}</p>
                        <button onClick={() => addToCart({ ...productKarma, quantity: 1 })}>Mua hàng</button>

                        <div className='cartItem'>
                            {cartItem.length === 0 ? (
                                <p>Giỏ hàng của bạn đang trống</p>
                            ) : (
                                <ul>
                                    {cartItem.map((item) => (
                                        <li key={item.id}>
                                            - Số lượng: {item.quantity} &nbsp; <br></br>
                                            <button onClick={() => handleEditKarmaItem(item)}>Sửa</button>
                                            <button onClick={() => handleDeleteKarmaItem(item)}>Xóa</button>
                                            <br></br>
                                            - Giá: {(item.price * item.quantity).toLocaleString()}đ
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <h3>Tổng tiền : {getTotalPriceKarma().toLocaleString()}đ</h3>
                        </div>
                    </div>

                    <div className="product-buttons">
                        {isModalKarma && (
                            <div style={modalStyles.overlay}>
                                <div style={modalStyles.modal}>
                                    <div style={modalStyles.header}>
                                        <h3>Thêm vào giỏ hàng thành công</h3>
                                        <button onClick={handleCloseModal} style={modalStyles.closeButton}>X</button>
                                    </div>
                                    <div style={modalStyles.content}>
                                        <img src="https://bizweb.dktcdn.net/thumb/compact/100/128/385/products/18.jpg?v=1477537547693" alt="Product" style={modalStyles.productImage} />
                                        <div>
                                            <p>{productKarma.name}</p>
                                            <p>{productKarma.price.toLocaleString()}đ</p>
                                            <p>{productKarma.desription}</p>
                                            <p>Tổng tiền : {getTotalPriceKarma().toLocaleString()}đ</p>
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
    );
}


//Các style cho modal 
// const modalStyles = {
//     overlay: {
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     modal: {
//         backgroundColor: '#fff',
//         borderRadius: '5px',
//         width: '1200px',
//         position: 'relative',
//     },
//     header: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         backgroundColor: 'blue',
//         height: '50px',
//         borderRadius: '5px'
//     },
//     closeButton: {
//         background: 'none',
//         border: 'none',
//         fontSize: '16px',
//         cursor: 'pointer',
//     },
//     content: {
//         display: 'flex',
//         alignItems: 'center',
//         marginTop: '10px',
//     },
//     productImage: {
//         width: '200px',
//         marginRight: '10px',
//         border: '1px solid black'
//     },
//     actions: {
//         marginTop: '20px',
//         justifyContent: 'space-between',
//     },
//     actionButton: {
//         backgroundColor: '#007bff',
//         color: '#fff',
//         padding: '10px 488px',
//         border: 'none',
//         cursor: 'pointer',
//         borderRadius: '5px',
//     },
// }
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
export default Karma;