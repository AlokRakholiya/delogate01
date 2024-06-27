import React from "react";
import './trusted.scss';
import trustedlogo from '../../../assets/LOGOs/trustedlogo.svg';
export default function Trusted() {
    return (
        <div>
            <div className="trusted">
                <div className="container">
                    <div className="trusted-title">
                        <h2 className="animate__animated animate__fadeInUp wow" data-wow-offset="80">Trusted by many <span>companies</span></h2>
                    </div>
                    <div className="trusted-logo">
                        <img src={trustedlogo} alt="trusted" />
                        <img src={trustedlogo} alt="trusted"/>
                        <img src={trustedlogo} alt="trusted"/>
                        <img src={trustedlogo} className="none" alt="trusted"/>
                        <img src={trustedlogo} className="none" alt="trusted"/>
                        <img src={trustedlogo} className="none" alt="trusted"/>
                    </div>
                </div>
            </div>
        </div>
    )
}