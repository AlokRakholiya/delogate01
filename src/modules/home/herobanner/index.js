import React from "react";
import './herobanner.scss';
import heroimage from '../../../assets/IMAGEs/hero.f3a23d79358c1c5aff90.png';
export default function Herobanner() {
    return (
        <div>
            <div className="herobanner">
                <div className="container">
                    <div className="herobanner-grid">
                        <div className="herobanner-grid-text">
                            <h1 className="animate__animated animate__fadeInUp wow" data-wow-offset="80">Simplify Operations. Amplify <span>Success.</span></h1>
                            <p className="animate__animated animate__fadeInUp wow" data-wow-offset="80">Access 4,000+ timezone aligned software engineers with experience in 100+ technologies.</p>
                            <button>Schedule  Call</button>
                        </div>
                        <div className="herobanner-grid-image">
                            <img src={heroimage} alt="hero" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}