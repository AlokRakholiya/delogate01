import React from "react";
import './header.scss';
import downarrow from '../../../assets/ICONs/down-icon.1ffa61786807341ea5ba2cfed7e4e5d0.svg';
import headerlogo from '../../../assets/LOGOs/headerlogo.svg';
import menu from '../../../assets/ICONs/pngwing.com.png';
import Footer from "../footer";
export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="header-logo">
                        <img src={headerlogo}  alt="delogate"/>
                    </div>
                    <div className="header-nav">
                        <nav>
                            <a href="#"> Home</a>
                            <a href="#">
                                <span>Services</span>
                                {/* <img src={downarrow} alt="down"/> */}
                            </a>
                            <a  href="#">Our Clients</a>
                            <a  href="#">About Us</a>
                            <a  href="#">Careers</a>
                            <a  href="#">Blog</a>
                        </nav>
                    </div>
                    <div className="header-button">
                        <button>Schedule a Call</button>
                    </div>
                    <div className="header-menu">
                        <img src={menu} alt="menubar" />
                    </div>
                </div>
            </div>
        </header>
    )
}