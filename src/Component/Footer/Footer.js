import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import 'boxicons'

const Footer = () => {

    return (
        <div>
            <footer className="footer-v1">
                <div clasclassNames="footer-info">
                    <div className="container">
                        <div className="row">
                            <div>
                                <div className="col-xs-6 footer-header">
                                    <div className="footer-info-widget">
                                        <h3><span>Theo dõi chúng tôi</span></h3>
                                        <ul className="list-inline">
                                            <li><Link to=""><i className='bx bxl-facebook-square' ></i></Link></li>
                                            <li><Link to=""><i className='bx bxl-twitter' ></i></Link></li>
                                            <li><Link to=""><i className='bx bxl-google-plus' ></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer-hotline">
                                    <div className="footer-info-widget">
                                        <h3><span>Hotline</span></h3>
                                        <p className="hotline"><a href="/">0123456789</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xs-12 ">
                                <div className="footer-info-widget">
                                    <h3 className="margin-bottom-5 margin-top-15"><span>Đăng ký nhận tin mới từ Gento leather store</span></h3><br></br>
                                    <p className="margin-bottom-10">Nhập vào email của bạn và bạn sẽ nhận được sớm nhất những thông tin khuyến mại từ chúng tôi</p>

                                    <form action="//dkt.us13.list-manage.com/subscribe/post?u=0bafe4be7e17843051883e746&amp;id=3bdd6e9e3b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
                                        <input type="email" value="" placeholder="Email của bạn" name="EMAIL" id="mail" aria-label="general.newsletter_form.newsletter_email" />
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="site-footer">
                    <div clasclassNames="container">
                        <div className="footer-inner">
                            <div clasclassNames="row">
                                <div className="col-xs-12">
                                    <div className="footer-widget">
                                        <h4><span>Tài khoản</span></h4>
                                        {/* <ul className="list-menu">

                                            <li><a href="/">Trang chủ</a></li>

                                            <li><a href="/collections/all">Sản phẩm</a></li>

                                            <li><a href="/tin-tuc">Blog</a></li>

                                            <li><a href="/gioi-thieu">Giới thiệu</a></li>

                                        </ul> */}
                                    </div>
                                </div><hr></hr>
                                <div className="col-xs-12">
                                    <div className="footer-widget">
                                        <h4><span>Hướng dẫn</span></h4>
                                        {/* <ul className="list-menu">

                                            <li><a href="/">Trang chủ</a></li>

                                            <li><a href="/collections/all">Sản phẩm</a></li>

                                            <li><a href="/tin-tuc">Blog</a></li>

                                            <li><a href="/gioi-thieu">Giới thiệu</a></li>

                                        </ul> */}
                                    </div>
                                </div><hr></hr>
                                <div className="col-xs-12">
                                    <div clclassNameass="footer-widget">
                                        <h4><span>Chính sách</span></h4>
                                        {/* <ul className="list-menu">

                                            <li><a href="/">Trang chủ</a></li>

                                            <li><a href="/collections/all">Sản phẩm</a></li>

                                            <li><a href="/tin-tuc">Blog</a></li>

                                            <li><a href="/gioi-thieu">Giới thiệu</a></li>
                                        </ul> */}
                                    </div>
                                </div><hr></hr>
                                <div className="col-xs-12">
                                    <div className="footer-widget no-border">
                                        <h4><span>Liên hệ</span></h4>
                                        {/* <ul className="contact list-menu">
                                            <li><i className="fa fa-map-marker"></i>Tầng 4 - Tòa nhà Hanoi Group, 442 Đội Cấn, Ba Đình, Hà Nội</li>
                                            <li><i className="fa fa-phone"></i>Tổng đài hỗ trợ: 1900.6750Từ 8h00 - 22h00 các ngày thứ 2 đến chủ nhật</li>
                                            <li><a href="" title=""><i class="fa fa-envelope"></i>support@bizweb.vn</a></li>
                                        </ul> */}
                                    </div>
                                </div><hr></hr>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="copyright clearfix">
                    <div className="container">
                        <div className="inner clearfix">
                            <div className="center">Bản quyền thuộc về Awesome Team | Cung cấp bởi
                                <a href="" rel="nofollow" title="Sapo" target="_blank">Sapo</a>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
