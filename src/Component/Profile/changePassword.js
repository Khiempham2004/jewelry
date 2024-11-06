import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Account.css'
import axios from 'axios';

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleOldPassword = (event) => {
        setOldPassword(event.target.value);
    };
    const handleNewPassword = (e) => {
        setNewPassword(e.target.value)
    };

    const handleComfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    const resetPassword = async (e) => {
        if (newPassword !== confirmPassword) {
            alert("Mật khẩu xác nhận không khớp!")
        }

        try {
            const respone = await axios.post("")
            console.log("Password : ", oldPassword);
            if (respone.status === 200) {
                alert("Password was successfully");
            } else {
                alert('Password reset failed. Please try again.')
            }
            // alert("Password was reset successfully")
        } catch (error) {
            console.log("Error :>> " , error);
            alert("Password an error occurred .Please try again");
        }
    };


    return (
        <div>
            <div className='listProduct'>
                <Link to='/trangchu' className='linkList'>
                    Trang chủ
                </Link>
                / Thay đổi mật khẩu
            </div>
            <div className='passwordAcccount'>
                <div className='changepassword'>
                    <p>TRANG TÀI KHOẢN</p>
                    <b>Xin chào , khiêm phạm!</b>
                    <hr></hr>
                    <Link to='/account'>Thông tin tài khoản </Link><br></br>
                    <Link to='/account/order'>Đơn hàng của bạn</Link> <br></br>
                    <Link to='/account/changePassword'>Đổi mật khẩu</Link><br></br>
                    <Link to='/account/address'>Số địa chỉ</Link>
                </div>
                <div>
                    <h1>Đổi mật khẩu</h1>
                    <p>Để đảm bảo tính bảo mật bạn vui lòng đặt lại mật khẩu với ít nhất 8 kí tự</p>
                    <div >
                        <h3>Mật khẩu cũ *</h3>
                        <input value={oldPassword} onChange={handleOldPassword} className='inpusPass' type='' style={{ width: "600px", height: "40px" }} />
                    </div><br></br>
                    <div>
                        <h3>Mật khẩu mới *</h3>
                        <input value={newPassword} onChange={handleNewPassword} className='inpusPass' type='' style={{ width: "600px", height: "40px" }} />
                    </div><br></br>
                    <div>
                        <h3>Xác nhận lại mật khẩu *</h3>
                        <input value={confirmPassword} onChange={handleComfirmPassword} className='inpusPass' type='' style={{ width: "600px", height: "40px" }} />
                    </div>
                    <button onClick={resetPassword} className='btnPassword' type='submit'>Đặt lại mật khẩu</button>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;
