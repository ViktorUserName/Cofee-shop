import React from 'react';
import './Header.scss';
import back from '../../img/back.png'
import logo from '../../img/revo_logo.png'
import mCart from '../../img/mainCart.svg'
import sCart from '../../img/CART.svg'



const Header: React.FC = () => {
    return (
        <main className='header'> 

            <div className="header-banner"></div>
            
            <div className="header-content">
                <div className="header__text">
                   
                    <img src={logo} className='header__logo' alt="" /> 
                    <div className="header-text-h1">
                        <div>YOUR</div>
                        <div className='text-test'>PERSONALIZED</div>
                        <div>COFFEE</div>
                    </div>
                
                </div>
               
                <nav className="header__nav">
                    <div className="header__nav-cart">
                        <img src={mCart} alt="" className="header__nav-scart" />
                        <div className="header__nav-dot">2</div>
                    </div>
                    <div className="header__nav-span">
                        <span>burger</span>
                    </div>
                    <ul className="header__nav-ul">
                        <li>TRANG CHỦ</li>
                        <li>COFFEE</li>
                        <li>PHIN MẠ MÀU</li>
                        <li>COMBO PHIN PHÊ</li>
                        <li>GIFTSET</li>
                        <li>LIÊN HỆ</li>
                    </ul>
                </nav>
                </div>
        </main>
    );
};

export default Header;