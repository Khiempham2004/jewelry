import React from 'react';
import boxicons from 'boxicons';
import './Home.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    const [currentCate, setCurrentCate] = useState('moi');

    const categories = {
        moi: ['sản phẩm 1', 'sản phẩm 2', 'sản phẩm 3'],
        noibat: ['Sản phẩm nổi bật 1', 'Sản phẩm nổi bật 2'],
        banchay: ['Sản phẩm bán chạy 1', 'Sản phẩm bán chạy 2', 'Sản phẩm bán chạy 3'],
    }
    const handleCategoryChange = (category) => {
        setCurrentCate(category);
    };


    return (
        <div>
            <div className="container">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                    </ol>

                    <div class="carousel-inner">
                        <div className="item active">
                            <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/128/385/themes/895029/assets/slider_1.jpg?1676343734179" alt="Los Angeles" />
                        </div>

                        <div class="item">
                            <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/128/385/themes/895029/assets/slider_2.jpg?1676343734179" alt="Chicago" />
                        </div>
                    </div>

                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>   
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

            <div className='product'>
                <h2>Sản Phẩm</h2>
                <ul className='StorePro'>
                    <li><Link to='/moi' className='link'>Mới</Link></li>
                    <li><Link to='/noibat' className='link'>Nổi bật</Link></li>
                    <li><Link to='/banchay' className='link'>Bán chạy</Link></li>
                </ul>
            </div>

        </div>
    );
}

export default Home;
