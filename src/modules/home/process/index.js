import React from "react";
import './process.scss';
export default function Process() {
    return (
        <div>
            <div className="process">
                <div className="container">
                    <div className="process-title">
                        <h6 className="animate__animated animate__fadeInUp wow" data-wow-offset="80">Our process. Simple, seamless, streamlined<span>.</span></h6>
                    </div>
                    <div className="process-cards">
                        <div className="process-cards-title">
                            <span>Step 01</span>
                            <span>Step 02</span>
                            <span>Step 03</span>
                        </div>
                        <div className="process-cards-line">
                            <div className="process-cards-line-dot">
                                <div className="process-cards-line-dot-item"></div>
                                <div className="process-cards-line-dot-item"></div>
                                <div className="process-cards-line-dot-item"></div>
                            </div>
                        </div>
                        <div className="process-cards-data">
                            <div className="process-cards-data-grid">
                                <div className="process-cards-data-grid-item">
                                    <h5>01</h5>
                                    <p>Explain us the problem</p>
                                    <span>Tell us more about your business on a discovery call. We’ll discuss team structure and approach, success criteria, timescale, budget, and required skill sets to see how we can help.</span>
                                </div>
                                <div className="process-cards-data-grid-item">
                                    <h5>02</h5>
                                    <p>Selecting together best candidates</p>
                                    <span>In a matter of days, we will finalize your project specifications, agree on an engagement model, select and onboard your team.</span>
                                </div>
                                <div className="process-cards-data-grid-item">
                                    <h5>03</h5>
                                    <p>Start working together</p>
                                    <span>Once we’ve agreed on milestones, we’ll immediately get to work. We’ll track progress, report updates, and continuously adapt to your needs.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}