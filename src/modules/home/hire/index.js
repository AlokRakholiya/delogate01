import React from "react";
import './hire.scss';
import call from '../../../assets/ICONs/call.svg';
import psychology from '../../../assets/ICONs/Psychological.svg';
import leetcode from '../../../assets/ICONs/Leetcode.svg';
import team from '../../../assets/ICONs/team.svg';
import arrowimage from '../../../assets/ICONs/hireawwor.png';
export default function Hire() {
    return (
        <div>
            <div className="hire" >
                <div className="hire-title">
                    <h4 className="animate__animated animate__fadeInUp wow" data-wow-offset="80">How We Hire</h4>
                </div>
                <div className="hire-grid">
                    <div className="hire-grid-item">
                        <div className="hire-grid-item-image">
                            <img src={call} alt="call" />
                        </div>
                        <div className="hire-grid-item-title">
                            <h4>Call</h4>
                        </div>
                        <div className="hire-grid-item-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla vestibulum arcu, ac facilisis sem sagittis et. Cras vitae gravida leo, vitae aliquam nunc.</p>
                        </div>
                        <div className="hire-grid-item-arrow">
                            <img src={arrowimage} alt="arrow" />
                        </div>
                    </div>
                    <div className="hire-grid-item">
                        <div className="hire-grid-item-image">
                            <img src={psychology} alt="psychology" />
                        </div>
                        <div className="hire-grid-item-title">
                            <h4>Psychological test</h4>
                        </div>
                        <div className="hire-grid-item-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla vestibulum arcu, ac facilisis sem sagittis et. Cras vitae gravida leo, vitae aliquam nunc.</p>
                        </div>
                        <div className="hire-grid-item-arrow second">
                            <img src={arrowimage} alt="arrow" />
                        </div>
                    </div>
                    <div className="hire-grid-item">
                        <div className="hire-grid-item-image">
                            <img src={leetcode} alt="leetcode" />
                        </div>
                        <div className="hire-grid-item-title">
                            <h4>Leetcode test</h4>
                        </div>
                        <div className="hire-grid-item-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla vestibulum arcu, ac facilisis sem sagittis et. Cras vitae gravida leo, vitae aliquam nunc.</p>
                        </div>
                        <div className="hire-grid-item-arrow">
                            <img src={arrowimage} alt="arrow" />
                        </div>
                    </div>
                    <div className="hire-grid-item">
                        <div className="hire-grid-item-image">
                            <img src={team} alt="team" />
                        </div>
                        <div className="hire-grid-item-title">
                            <h4>Welcome to the team</h4>
                        </div>
                        <div className="hire-grid-item-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla vestibulum arcu, ac facilisis sem sagittis et. Cras vitae gravida leo, vitae aliquam nunc.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}