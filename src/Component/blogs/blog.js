import React from 'react';
import { Link } from 'react-router-dom';
import './blog.css'
const Blog = () => {
    return (
        <div>
            <div>
                <div className='blogcss'>TIN TỨC</div>
                <Link className='onlineblog'>Bí quyết bán hàng Online thành công</Link>
                <div className='umbrella'>
                    <div className=''>
                        <img
                            className='umbreImg'
                            src='https://bizweb.dktcdn.net/thumb/grande/100/128/385/articles/desk-workspace.jpg?v=1475470111710'
                        />
                    </div>
                    <div className='formationsucess'>
                        <Link to='' >Bí quyết án hàng thành công</Link>
                        <p>[TheoVNExpress] Bán sản phẩm tốt, mô tả rõ ràng, phản hồi kịp thời, niềm nở khi trao đổi, luôn có ưu đãi, hậu mãi tốt… sẽ giúp các shop xây dựng được uy tín với...</p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <hr></hr>
            <div>
                <div>
                    <Link className='onlineblog'>99% Startup thất bại, hãy lắng nghe những chia sẻ đáng quý này để thành công</Link>
                    <div className='umbrella'>
                        <div className=''>
                            <img
                                className='umbreImg'
                                src='https://bizweb.dktcdn.net/thumb/grande/100/128/385/articles/online.jpg?v=1477995608000'
                            />
                        </div>
                        <div className='formationsucess'>
                            <Link to='' >Bí quyết án hàng thành công</Link>
                            <p>[Theo CafeBiz] "Startup vốn như một chiếc tàu lượn siêu tốc, lên – xuống và lao đi với tốc độ chóng mặt. Nhiều khi không có đủ các thông tin...</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <hr></hr>
            <div>
                <div>
                    <Link className='onlineblog'>Lương sếp có thể thiếu nhưng tiền trả cho nhân viên</Link>
                    <div className='umbrella'>
                        <div className=''>
                            <img
                                className='umbreImg'
                                src='https://bizweb.dktcdn.net/thumb/grande/100/128/385/articles/tong-giam-doc-dkt-luong-sep-co-the-thieu-nhung-tien-tra-cho-nhan-vien-khong-the-cham.jpg?v=1477995618873'
                            />
                        </div>
                        <div className='formationsucess'>
                            <Link to='' >Bí quyết án hàng thành công</Link>
                            <p>(NDH) “Có những thời điểm công ty gặp khó khăn về tài chính, cả nửa năm tôi và các founder không nhận được đồng lương nào. Nhưng chúng tôi vẫn...</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <hr></hr>
            <div>
                <div>
                    <Link className='onlineblog'>Doanh nghiệp bán hàng online nên chấm dứt khuyến mãi ảo</Link>
                    <div className='umbrella'>
                        <div className=''>
                            <img
                                className='umbreImg'
                                src='https://bizweb.dktcdn.net/thumb/grande/100/128/385/articles/333.jpg?v=1477995627147'
                            />
                        </div>
                        <div className='formationsucess'>
                            <Link to='' >Bí quyết án hàng thành công</Link>
                            <p>(NDH) “Có những thời điểm công ty gặp khó khăn về tài chính, cả nửa năm tôi và các founder không nhận được đồng lương nào. Nhưng chúng tôi vẫn...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
