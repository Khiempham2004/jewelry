import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Account.css'

const AddressNumber = () => {
    const [isModalAddress, setIsModalAddress] = useState(false);
    const [country, setCountry] = useState("");
    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");
    const [ward, setWard] = useState("");

    // Dữ liệu các tỉnh thành
    const provinces = ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng"];
    const districts = {
        "Hà Nội": ["Quận Hoàn Kiếm", "Quận Đống Đa", "Quận Cầu Giấy"],
        "Hồ Chí Minh": ["Quận 1", "Quận 2", "Quận 3"],
        "Đà Nẵng": ["Quận Hải Châu", "Quận Sơn Trà", "Quận Thanh Khê"],
    };
    const wards = {
        "Quận Hoàn Kiếm": ["Phường Hàng Bạc", "Phường Hàng Đào"],
        "Quận Đống Đa": ["Phường Cát Linh", "Phường Quốc Tử Giám"],
        "Quận Cầu Giấy": ["Phường Dịch Vọng", "Phường Yên Hòa"],
    };

    const openModalAddress = () => {
        setIsModalAddress(true);
    };

    const closeModalAddress = () => {
        setIsModalAddress(false);
    };

    const handleProvinceChange = (e) => {
        setProvince(e.target.value);
        setDistrict("");
        setWard("");
    };

    const handleDistrictChange = (e) => {
        setDistrict(e.target.value);
        setWard("");
    };

    const handleWardChange = (e) => {
        setWard(e.target.value);
    };

    return (
        <div>
            <div className='listProduct'>
                <Link to='/trangchu' className='linkList'>
                    Trang chủ
                </Link>
                <Link to='/account' className='linkStore'> / Tài khoản</Link>
                /Đơn hàng
            </div>
            <div className='passwordAcccount'>
                <div className='headerPassword'>
                    <p>TRANG TÀI KHOẢN</p>
                    <b>Xin chào , khiêm phạm!</b>
                    <hr></hr>
                    <Link to='/account'>Thông tin tài khoản </Link><br></br>
                    <Link to='/account/order'>Đơn hàng của bạn</Link> <br></br>
                    <Link to='/account/changePassword'>Đổi mật khẩu</Link><br></br>
                    <Link to='/account/address'>Số địa chỉ</Link>
                </div>

                <div>
                    <h1>Địa chỉ của bạn</h1>
                    <button onClick={openModalAddress} className='add-address-button'>Thêm địa chỉ</button>
                </div>

                {
                    isModalAddress && (
                        <div className="modal-overlay" onClick={closeModalAddress}>
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <p className=''> <b>Thêm địa chỉ mới</b></p>
                                <form>
                                    <input type='text' placeholder='Họ tên' />
                                    <input type='text' placeholder='Số điện thoại' />
                                    <input type='text' placeholder='Công ty' />
                                    <input type='text' placeholder='Địa chỉ' />
                                    <div className="address-form">
                                        <div>
                                            <label className='coutryNumber'>Quốc gia</label>
                                            <div >{country}</div>
                                        </div>

                                        <div>
                                            <label>Tỉnh thành</label>
                                            <select value={province} onChange={handleProvinceChange}>
                                                <option value="">---</option>
                                                {provinces.map((province) => (
                                                    <option key={province} value={province}>
                                                        {province}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label>Quận huyện</label>
                                            <select
                                                value={district}
                                                onChange={handleDistrictChange}
                                                disabled={!province}
                                            >
                                                <option value="">---</option>
                                                {province &&
                                                    districts[province]?.map((district) => (
                                                        <option key={district} value={district}>
                                                            {district}
                                                        </option>
                                                    ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label>Phường xã</label>
                                            <select
                                                value={ward}
                                                onChange={handleWardChange}
                                                disabled={!district}
                                            >
                                                <option value="">---</option>
                                                {district &&
                                                    wards[district]?.map((ward) => (
                                                        <option key={ward} value={ward}>
                                                            {ward}
                                                        </option>
                                                    ))}
                                            </select>
                                        </div><br></br>
                                    </div>
                                    <input type='text' placeholder='Mã Zip' />
                                    <div className='optionAdress'>
                                        <button onClick={closeModalAddress}>Hủy</button>
                                        <button className='buttonAddress' type="submit" >Thêm địa chỉ</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default AddressNumber;
