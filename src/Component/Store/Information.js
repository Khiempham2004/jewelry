import React from 'react';

const Information = () => {
    return (
        <div>
            <h1>Bài viết mới nhất</h1>
            <div className='umbrella'>
                <div className=''>
                    <img
                        className='umbreImg'
                        src='https://bizweb.dktcdn.net/thumb/1024x1024/100/128/385/articles/desk-workspace.jpg?v=1475470111710'
                    />
                </div>
                <div className='formationsucess'>
                    <a href='' >Bí quyết án hàng thành công</a>
                    <p>[TheoVNExpress] Bán sản phẩm tốt, mô tả rõ ràng, phản hồi kịp thời, niềm nở khi trao đổi, luôn có ưu đãi, hậu mãi tốt… sẽ giúp các shop xây dựng được uy tín với...</p>
                </div>
            </div>

            <div className='formationStruc'>
                <ul>
                    <a href=''>
                        <li>99% Startup thất bại, hãy lắng nghe những chia sẻ đáng quý này để thành công</li>
                    </a>
                </ul><hr></hr>
                <ul>
                    <a href=''>
                        <li>Lương sếp có thể thiếu nhưng tiền trả cho nhân viên</li>
                    </a>
                </ul><hr></hr>
                <ul>
                    <a href=''>
                        <li>Doanh nghiệp bán hàng online nên chấm dứt khuyến mãi ảo</li>
                    </a>
                </ul>
            </div>
        </div>
    );
}

export default Information;
