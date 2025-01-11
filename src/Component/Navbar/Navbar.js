import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Style.css';
import { Authcontext } from '../login/Authcontext.js';
import { Autocomplete } from '@mui/material/Autocomplete';
import { TextField } from '@mui/material/TextField';


const Navbar = () => {
    const productGento = useState([
        { id: 1, name: 'Áo thun', price: 200000 },
        { id: 2, name: 'Quần jeans', price: 500000 },
        { id: 3, name: 'Giày thể thao', price: 800000 },
        { id: 4, name: 'Balo thời trang', price: 300000 }
    ])
    const [searchQuery, setSearchQuery] = useState('');
    const [filterName, setFilterName] = useState(productGento)
    const { isLoggedIn, userName, logout } = useState(Authcontext);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate('');
    const open = Boolean(anchorEl);

    const handleSearchChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const filteredItems = productGento.filter(item =>
            item.name.toLowerCase().includes(query)
        );
        setFilterName(filteredItems);
    }

    return (
        <div>
            <div className="offcanvas offcanvas-start" id="demo">
                <div>
                    <div className='search'>
                        <Autocomplete
                            className=''
                            disablePortal
                            options={productGento}
                            sx={{ width: 350 }}
                            renderInput={(params) => <TextField {...params} type='text' autoComplete='off' placeholder='Tìm kiếm sản phẩm....' label="Movie" />}
                            onChange={(event, newValue) => {
                                if (newValue) {
                                    const { Link } = newValue;
                                    navigate(`${Link}`, {
                                        realative: "router"
                                    });
                                }
                            }}
                        />
                    </div>
                    <div className='cart'>
                        {
                            filterName.length > 0 ? (
                                <ul>
                                    {filterName.map(item => (
                                        <li key={item.id}>
                                            {item.name} - ${item.price}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p></p>
                            )
                        }
                    </div>
                </div>

                <hr></hr>

                <div className="offcanvas-header">
                    {
                        isLoggedIn ? (
                            <>
                                <span>Xin chào {userName}</span>
                                <button onClick={logout} style={{ marginLeft: "10px", padding: "5px 10px", background: "red", color: "white" }}>Đăng xuất</button>
                            </>
                        ) : (
                            <>
                                <p><Link to='/login' className='form-login' >Đăng Nhập</Link></p>
                                <p ><Link to='/register' className='form-register'>Đăng Ký</Link></p>
                            </>
                        )}
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                </div>
                <hr></hr>
                <div className="offcanvas-body">
                    <p><Link to='/trangchu' className='form' >Trang Chủ</Link></p>
                    <hr></hr>
                    <p><Link to='/sanpham' className='form'>Sản Phẩm</Link></p>
                    <hr></hr>
                    <p><Link to='/blog' className='form'>Blog</Link></p>
                    <hr></hr>
                    <p><Link to='/gioithieu' className='form'>Giới Thiệu</Link></p>
                </div>
            </div>
            <div className="btn btn-primary" id='thoitrang'>
                <button id='open' type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                    <i className='bx bx-signal-3'></i>
                </button>
                <div className='store'>
                    <Link to='/' className='gento'>Gento Store</Link>
                    <Link to='/cart' className='cart'>
                        {/* <box-icon name='cart' ></box-icon> */}
                        <i class='bx bx-cart'></i>
                    </Link>
                </div>
            </div>
            <div className='search'>
                <input type='text' placeholder='Tìm kiếm sản phẩm...' />
            </div>
        </div>
    );
}

export default Navbar;

