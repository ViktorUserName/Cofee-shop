import React from 'react';
import './Machine.scss';
import fSvg from './CartImg/first.svg'
import sSvg from './CartImg/second.svg'
import tSvg from './CartImg/third.svg'
import foSvg from './CartImg/forth.svg'



const Machine: React.FC = () => {
    return (
        <section className='machine'>

            <div className="wrapper">
                <div className="machine-content">
                    <div className="machine__text">
                        <h2 className="">Your Personalized Coffee</h2>
                        <h1 className="">COFFEE BUILD YOUR BASE</h1>
                    </div>
                    <div className="machine__cart">
                    <div className='machine__cart-item'>
                        <img src={fSvg} alt="" />
                        <h2 className="">Nguồn gốc</h2>
                        <p className="">Những hạt cà phê Arabica, Robusta đạt chất lượng theo tiêu chuẩn quốc tế.</p>  
                    </div>
                    <div className='machine__cart-item'>
                        <img src={sSvg} alt="" />
                        <h2 className="">Chất lượng</h2>
                        <p className="">Từng một hạt cà phê là cả một quá trình tập trung cao độ của nghệ nhân cà phê.</p>  
                    </div>
                    <div className='machine__cart-item'>
                        <img src={tSvg} alt="" />
                        <h2 className="">Các loại hạt</h2>
                        <p className="">70% chất lượng tách cà phê đến từ nguồn gốc và chất lượng green bean.</p>  
                    </div>
                    <div className='machine__cart-item'>
                        <img src={foSvg} alt="" />
                        <h2 className="">Pha chế</h2>
                        <p className="">Những hạt cà phê được lột xác qua quá trình rang xay kỹ lưỡng và nghiêm ngặt.</p>  
                    </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Machine;