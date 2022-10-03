import React from 'react';
import './Personal.scss';
import { Navigation, Pagination, EffectCube } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import "swiper/css/effect-cube";
import img from '../../img/personal-img.png'


const Item: React.FC = () => {
    return (
        <div className="personal__item">
            <img src={img} alt="" />
            <div className="personal__item-info">
                <h1>Combo Revo Đậm Đà</h1>
                <p>Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để làm bạn tỉnh táo làm việc...</p>
                <div className="personal__item-info__togle">
                    <p className='personal__item-info__togle-p'>MUA NGAY</p>
                    <p className='personal__item-info__togle-p'>CHI TIẾT</p>
                </div>
            </div>
        </div>
    )
}

const Personal: React.FC = () => {
    return (
        <section className='personal'>
            
                <div className="personal-content">
                    <div className="personal__text">
                        <h2>Your Personalized Coffee</h2>
                        <h1>COMBO PHIN PHÊ</h1>
                    </div>
                    <div className="wrapper">
                    <Swiper className='mySwiper3'
                                effect={"cube"}
                                grabCursor={true}
                                cubeEffect={{
                                  shadow: true,
                                  slideShadows: true,
                                  shadowOffset: 80,
                                  shadowScale: 0.80,
                                }}
                                pagination={true}
                                modules={[EffectCube, Pagination]}
                        >

                            <SwiperSlide><Item/></SwiperSlide>
                            <SwiperSlide><Item/></SwiperSlide>
                            <SwiperSlide><Item/></SwiperSlide>
                            <SwiperSlide><Item/></SwiperSlide>
                            <SwiperSlide><Item/></SwiperSlide>
                            <SwiperSlide><Item/></SwiperSlide>
                            <SwiperSlide><Item/></SwiperSlide>
                    
                    </Swiper>
                    </div>
                </div>
           
        </section>
    );
};

export default Personal;