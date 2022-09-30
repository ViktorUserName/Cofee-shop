import React from 'react';
import './Examples.scss';
import "./slider.scss"
import { Navigation, Pagination, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import "swiper/scss/grid";
// import 'swiper/scss/parallax';
import example from '../../img/example.png'

const Item: React.FC = () => {
    return (
        <div className="examples__slide-group">
        <div className="examples__slide-item">
            <img src={example} alt="" className="" />
            <div className="examples__slide-item-text">
                <h2 className='examples__slide-item-h2'>REVO Morning</h2>
                <p className='item-p'>đắng, hậu ngọt, hương hoa</p>
                <div className='item-ratio'>
                    <p>MUA NGAY</p>
                    <p>CHI TIẾT</p>
                </div>
            </div>
        </div>
        </div>
    )
}

const Examples: React.FC = () => {
    return (
        <section className='examples'>
                <div className="examples-content">
                    <div className="examples__title">
                        <h2>Choose Your Favorite</h2>
                        <h1>CHUẨN GU ĐÚNG VỊ</h1>
                    </div>
                      
            <div className='examples__padd-slid'>
                <Swiper className='mySlider1'
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    breakpoints={ {
                        850: {
                            slidesPerView: 2.2,
                        },
                        500: {
                            slidesPerView: 1.2
                        }
                    }}


                    
                    >

                    <SwiperSlide>
                        <Item/>
                        <Item/>
                    </SwiperSlide>
                    <SwiperSlide>
                       <Item/>
                       <Item/>
                    </SwiperSlide>
                    <SwiperSlide>
                       <Item/>
                       <Item/>
                    </SwiperSlide>
                    <SwiperSlide>
                       <Item/>
                       <Item/>
                    </SwiperSlide>
                    <SwiperSlide>
                       <Item/>
                       <Item/>
                    </SwiperSlide>
                    <SwiperSlide>
                       <Item/>
                       <Item/>
                    </SwiperSlide>
                 </Swiper>

                 </div>
                 
            </div>       
        </section>
    );
};

export default Examples;