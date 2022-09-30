import React from 'react';
import './Gift.scss';
import { Navigation, Pagination, Parallax } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import gift from '../../img/gift.svg';
import beans from '../../img/gift-beans.svg';
import mount from '../../img/gift-mount.svg';


const Item: React.FC = () => {
    return (
        <div className='gift__slider-items'>
            <div className="gift__slider-item">
                    <img src={gift} alt="" className='gift__slider__main-img'/>
                    <div className="gift__slider-item-text">
                        <h1>Giftset "Cà phê phin Việt Nam"</h1>
                        <p className='gift__text-wrapp-no'>Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho bạn.</p>
                        <p className='gift__text-wrapp'>Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo công ...</p>
                        <div className="gift__slider-item-describ">
                            <div className="gift__slider-item-describ-text">
                            <img src={beans} alt="" />
                                <div>
                                <p>Loại hạt</p>
                                <p>Fine Robusta Blend</p>
                                </div>
                            </div>
                            <div className="gift__slider-item-describ-text">
                            <img src={mount} alt="" />
                                <div>
                                <p>Độ cao</p>
                                <p>700 - 800m</p>
                                </div>
                            </div>
                        </div>
                        <div className="gift__slider-item__ratio">
                            <p>MUA NGAY</p>
                            <p>CHI TIẾT</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

    
const Gift: React.FC = () => {
    return (
        <section className='gift'>
            <div className="wrapper">
            
            <div className="gift-content">
                <div className="gift__title">
                    <h2>Best Gift For Best Friend</h2>
                    <h1>GIFTSET</h1>
                </div>
                
                 
                 <Swiper className='gift-swiper'
                    direction={"vertical"}
                    pagination={
                        {clickable: true,
                        renderBullet: function (index, className) {
                                return '<span class="' + className + '">' + (index + 1) + "</span>";
                              },
                        }
                    }
                    modules={[Pagination]}
                    >
                    <SwiperSlide><Item/></SwiperSlide>
                    <SwiperSlide><Item/></SwiperSlide>
                    <SwiperSlide><Item/></SwiperSlide>
                </Swiper>
            </div>
            </div>
        
            
        </section>
    );
};

export default Gift;