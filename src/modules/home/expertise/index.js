import React from "react";
import './expertise.scss';
import csd from '../../../assets/ICONs/soft-dev.svg';
import qa from '../../../assets/ICONs/qatest.svg';
import ai from '../../../assets/ICONs/aidatascience.svg';
import mobileapp from '../../../assets/ICONs/mobileapp.svg';
import uiux from '../../../assets/ICONs/uiux.svg';
import platform from '../../../assets/ICONs/platform.svg';
export default function Expertise() {
    return (
        <div className="container">
            <div className="expertise">
                <div className="expertise-title">
                    <h4 className="animate__animated animate__fadeInUp wow" data-wow-offset="80">From Concept to Completion: Our Full-Stack Expertise<span>.</span></h4>
                </div>
                <div className="expertise-data">
                    <div className="expertise-grid">
                        <div className="expertise-grid-item">
                            <img src={csd} alt="csd" />
                            <p>Custom Software Development</p>
                            <span>Create custom software tailored for your unique needs, including front-end, and core back-end technology.</span>
                        </div>
                        <div className="expertise-grid-item">
                            <img src={qa} alt="testing" />
                            <p>QA and Testing</p>
                            <span>Make your technology bulletproof, with manual and automated testing Icon3 AI and Data Science
                                Use leading AI, machine learning, and </span>
                        </div>
                        <div className="expertise-grid-item">
                            <img src={ai} alt="ai" />
                            <p>AI and Data Science</p>
                            <span>Use leading AI, machine learning, and data engineering technologies to unlock business value.</span>
                        </div>
                        <div className="expertise-grid-item">
                            <img src={mobileapp} alt="app" />
                            <p>Mobile App Development</p>
                            <span>Build performant, scalable, and secure mobile applications for iOS and Android devices.</span>
                        </div>
                        <div className="expertise-grid-item">
                            <img src={uiux} alt="uiux" />
                            <p>UX/UI Design</p>
                            <span>Create beautiful, pixel-perfect, and easy-to-use designs that delight your end users.</span>
                        </div>
                        <div className="expertise-grid-item">
                            <img src={platform} alt="platform" />
                            <p>Platform and Infrastructure</p>
                            <span>Ensure applications are secure, fault tolerant and highly available with our DevOps and Security engineers.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}