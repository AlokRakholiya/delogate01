import React from "react";
import './footer.scss';
import delogate from '../../../assets/LOGOs/delogatelogo.svg';
import facebook from '../../../assets/LOGOs/facebook.svg';
import twiter from '../../../assets/LOGOs/twiter.svg';
import ig from '../../../assets/LOGOs/ig.svg';
import youtube from '../../../assets/LOGOs/youtube.svg';
import phone from '../../../assets/LOGOs/phone.svg';
export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer">
                    <div className="footer-logo">
                        <div className="footer-logo-image">
                            <img src={delogate} alt="delogate" />
                        </div>
                        <div className="footer-logo-data">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae lobortis est, ac viverra sapien. Proin feugiat, mi vitae ultrices dictum, felis dui rutrum erat, sit amet molestie est erat auctor nisl.</p>
                        </div>
                        <div className="footer-logo-social">
                            <img src={facebook} alt="facebook" />
                            <img src={twiter} alt="twitter" />
                            <img src={ig} alt="instagram" />
                            <img src={youtube} alt="youtube" />
                        </div>
                    </div>
                    <div className="footer-data">
                        <div className="footer-data-grid">
                            <div className="footer-data-grid-item">
                                <div className="footer-data-grid-item-title">
                                    <h5>Links</h5>
                                </div>
                                <div className="footer-data-grid-item-data">
                                    <a href="#">Services</a>
                                    <a href="#">Our Clients</a>
                                    <a href="#">About Us</a>
                                    <a href="#">Careers</a>
                                    <a href="#">Contact Us</a>
                                </div>
                            </div>
                            <div className="footer-data-grid-item">
                                <div className="footer-data-grid-item-title">
                                    <h5>Pages</h5>
                                </div>
                                <div className="footer-data-grid-item-data">
                                    <a href="#">Privacy Policy</a>
                                    <a href="#">Terms of Service</a>
                                    <a href="#">Privacy Shield Policy</a>
                                </div>
                            </div>
                            <div className="footer-data-grid-item">
                                <div className="footer-data-grid-item-title">
                                    <h5>Get in touch</h5>
                                </div>
                                <div className="footer-data-grid-item-data">
                                    <a href="#"> <img src={phone}  alt="phone"/> +1 (408) 478-2739</a>
                                    <button>Schedule a Call</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-rights">
                <p>Delogate 2009 - 2023. All rights reserved.</p>
            </div>
        </footer>
    )
}