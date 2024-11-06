import React, { useState } from 'react';
import './Account.css'
import { Link } from 'react-router-dom';

const Orders = () => {
    const [formOrder, setFormOrder] = useState({
        orders: '',
        day: '',
        address: '',
        OrderValue: '',
        pay: '',
        transport: ''
    });

    const handleChangeOrder = (event) => {
        const { name, value, type } = event.target;
        setFormOrder((prevState) => ({
            ...prevState,
            [name]: type === 'radio' ? value : event.target.value,
        }));
    };
    const handleSubmitOrder = (event) => {
        event.preventDefault();
        console.log('Form submitOrder : ', formOrder);
        setFormOrder({
            orders: '',
            day: '',
            address: '',
            OrderValue: '',
            pay: 'cash',
            transport: '',
        });
    }

    return (
        <div>
            <div className='listProduct'>
                <Link to='/trangchu' className='linkList'>
                    Trang chủ
                </Link>
                <Link to='/account' className='linkStore'> / Tài khoản</Link>
                /Đơn hàng
            </div>
            <div className='orderAccountss'>
                <div className='headerAccount'>
                    <header>TRANG TÀI KHOẢN</header>
                    <b>Xin chào , khiêm phạm!</b>
                    <hr></hr>
                    <Link to='/account'>Thông tin tài khoản </Link><br></br>
                    <Link to='/account/order'>Đơn hàng của bạn</Link> <br></br>
                    <Link to='/account/changePassword'>Đổi mật khẩu</Link><br></br>
                    <Link to='/account/address'>Số địa chỉ</Link>
                </div>
                <div>
                    <h1>Đơn hàng của bạn</h1>
                    <form onSubmit={handleSubmitOrder} className='formOrderClass' >
                        <div >
                            <label className='labelOrder'>Mã đơn hàng : </label>
                            <input className='inputOrder' type='text' name='orders' value={formOrder.orders} onChange={handleChangeOrder} />
                        </div>
                        <div>
                            <label className='labelOrder'>Ngày đặt hàng : </label>
                            <input className='inputOrder' type='date' name='day' value={formOrder.day} onChange={handleChangeOrder} />
                        </div>
                        <div>
                            <label className='labelOrder'>Địa chỉ : </label>
                            <textarea id='address' name="address" value={formOrder.address} onChange={handleChangeOrder} />
                        </div>
                        <div>
                            <label className='labelOrder'>Gía trị đơn hàng: </label>
                            <input className='inputOrder' type='number' name='OrderValue' value={formOrder.OrderValue} onChange={handleChangeOrder} />
                        </div>
                        <div>
                            <label className='labelOrder'>Thanh toán : </label>
                            <input className='inputRadio' type='radio' name='pay' value={formOrder.pay} onChange={handleChangeOrder} />Tiền mặt
                            <input className='inputRadio' type='radio' name='pay' value={formOrder.pay} onChange={handleChangeOrder} /> Thẻ
                        </div>
                        <div>
                            <label className='labelOrder'>Vận chuyển : </label>
                            <input className='inputOrder' type='text' name='transport' value={formOrder.transport} onChange={handleChangeOrder} />
                        </div>
                        <button type='submit' className='btnOrder'>Lưu đơn hàng</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Orders;
