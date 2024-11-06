import React from 'react';
import useState from 'react';
import { Link } from 'react-router-dom';
const Kimono = () => {
    const [cartItem, setCartItem] = useState([]);
    const [quantityStore, setQuantityStore] = useState(1);
    const [isModalStore, setModalStore] = useState(false);
    const [isCartStore, setIsCartStore] = useState(false);
    const [isEditting, setIsEditting] = useState(null);
    const [editItem, setEditItem] = useState(null);


    const product = {
        id: 1,
        name: 'Áo len Karma AF',
        price: 550000,
        desription: " Chiếc áo len này của Kimono Club sẽ giúp tăng thêm cảm giác mềm mại cho diện mạo hằng ngày của bạn...",
    };

    //Thêm san pham vào giỏ hàng
    const handleQuantityChange = (value) => {
        if (quantityStore + value >= 1) {
            setQuantityStore(quantityStore + value)
        }
        const newQuantify = Math.max(1, quantityStore + value);
        setQuantityStore(newQuantify);
    };

    const handleBuyClick = () => {
        setModalStore(true);
        //Cập nhạt giỏ hàng : thêm sản phẩm mới
        // setCartItem([...cartItem, product]);
    };

    const handleEditCartItem = (item) => {
        setIsEditting(item.id);
        setEditItem({ ...item });
        console.log("Edit cart item  :>>", item);
    };

    const handleDeleteCartItem = (itemId) => {
        const updatedCart = cartItem.filter((item) => item.id !== itemId);
        addToCart(updatedCart);
    };

    //Đóng modal 
    const handleCloseModal = () => {
        setModalStore(false)
    };

    //Kiểm tra giỏ hàng : mở modal hoặc redirect đến trong giỏ hàng
    const handleCheckCart = () => {
        setIsCartStore(true);
        setModalStore(false);
    };

    // const addToCart = () => {
    //     setCartCount(cartCount + quantityStore);
    // };

    // Thêm sản phẩm vào giỏ hàng
    const addToCart = () => {
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
    };

    // Hàm tính tổng
    const getTotalPrice = () => {
        return cartItem.reduce((total, item) => total + item.price * item.quantity, 0);
    };
    return (
        <div>
            <div className='listProduct'>
                <Link to='/trangchu' className='linkList'>
                    Trang chủ
                </Link>
                <Link to='/sanpham' className='linkStore'>/ Quần áo</Link>
                / Áo len Kimono AF
            </div>

            <h2 className='headingStore'>ÁO LEN Kimono AF</h2>

            <div className="product-container">
                <div className="product-image">
                    <img src="https://bizweb.dktcdn.net/thumb/medium/100/128/385/products/19.jpg?v=1477537649947" alt="Product" />
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
                        <p>{product.description}</p>
                        <button onClick={() => addToCart({ ...product, quantityStore })}>Mua hàng</button>

                        <div className='cartItem'>
                            {cartItem.length === 0 ? (
                                <p>Giỏ hàng của bạn đang trống</p>
                            ) : (
                                <ul>
                                    {cartItem.map((item) => (
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
                        </div>
                    </div>

                    <h3>Tổng tiền: {getTotalPrice().toLocaleString()}đ</h3>
                    <div className="product-buttons">
                        <button className="buy-button" onClick={handleBuyClick}>Mua hàng</button>
                        <button className="call-button" >Gọi</button>

                        {isModalStore && (
                            <div style={modalStyles.overlay}>
                                <div style={modalStyles.modal}>
                                    <div style={modalStyles.header}>
                                        <h3>Thêm vào giỏ hàng thành công</h3>
                                        <button onClick={handleCloseModal} style={modalStyles.closeButton}>X</button>
                                    </div>
                                    <div style={modalStyles.content}>
                                        <img src="https://bizweb.dktcdn.net/thumb/medium/100/128/385/products/19.jpg?v=1477537649947" alt="Product" style={modalStyles.productImage} />
                                        <div>
                                            <p>{product.name}</p>
                                            <p>{product.price.toLocaleString()}đ</p>
                                            <p>{product.desription}</p>
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

export default Kimono;
