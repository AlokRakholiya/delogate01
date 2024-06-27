import React from "react";
import './cover.scss';
import 'animate.css';
import node1 from '../../../assets/IMAGEs/nodejs1.png';
import python from '../../../assets/IMAGEs/python.png';
import node2 from '../../../assets/IMAGEs/nodejs2.png';
import rightarrow from '../../../assets/ICONs/rightarrow.svg';
export default function Cover() {
    return (
        <div>
            <div className="cover">
                <div className="container">
                    <div className="cover-title">
                        <h6 className="animate__animated animate__fadeInUp wow" data-wow-offset="80">Yes. We cover your tech stack<span>.</span></h6>
                        <p>Our 4,000+ team has expertise in almost every programming language.</p>
                    </div>
                    <div className="cover-grid">
                        <div className="cover-grid-item">
                            <div className="cover-grid-item-image">
                                <img src={node1} alt="nodejs" />
                            </div>
                            <div className="cover-grid-item-data">
                                <p>Node.js</p>x 
                                <img src={rightarrow} alt="right"/>
                            </div>
                        </div>
                        <div className="cover-grid-item">
                            <div className="cover-grid-item-image">
                                <img src={python} alt="python"/>
                            </div>
                            <div className="cover-grid-item-data">
                                <p>Python</p>
                                <img src={rightarrow} alt="right" />
                            </div>
                        </div>
                        <div className="cover-grid-item">
                            <div className="cover-grid-item-image">
                                <img src={node1} alt='nodejs' />
                            </div>
                            <div className="cover-grid-item-data">
                                <p>Node.js</p>
                                <img src={rightarrow} alt="right" />
                            </div>
                        </div>
                        <div className="cover-grid-item">
                            <div className="cover-grid-item-image">
                                <img src={python} alt="python" />
                            </div>
                            <div className="cover-grid-item-data">
                                <p>Python</p>
                                <img src={rightarrow} alt="right" />
                            </div>
                        </div>



                        <div className="cover-grid-item">
                            <div className="cover-grid-item-image">
                                <img src={node1} alt="nodejs" />
                            </div>
                            <div className="cover-grid-item-data">
                                <p>Node.js</p>x 
                                <img src={rightarrow} alt="right"/>
                            </div>
                        </div>
                        <div className="cover-grid-item">
                            <div className="cover-grid-item-image">
                                <img src={python} alt="python"/>
                            </div>
                            <div className="cover-grid-item-data">
                                <p>Python</p>
                                <img src={rightarrow} alt="right" />
                            </div>
                        </div>
                        <div className="cover-grid-item">
                            <div className="cover-grid-item-image">
                                <img src={node1} alt='nodejs' />
                            </div>
                            <div className="cover-grid-item-data">
                                <p>Node.js</p>
                                <img src={rightarrow} alt="right" />
                            </div>
                        </div>
                        <div className="cover-grid-item">
                            <div className="cover-grid-item-image">
                                <img src={python} alt="python" />
                            </div>
                            <div className="cover-grid-item-data">
                                <p>Python</p>
                                <img src={rightarrow} alt="right" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}