import { faChartBar, faChartLine, faPercent, faPercentage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './RevenueDetail.css';

const RevenueDetail = () => {
    return (
        <div className='container-fluid'>
            <div className="revenue-grid">
                <div style={{display:"flex"}}>
                    <div>
                        <span style={{marginRight:"15px", fontSize:"25px"}}><FontAwesomeIcon icon={faChartLine}/></span>
                    </div>
                    <div>
                        <small>Revenue From Operation</small>
                        <p>INR 4233.80 Cr.</p>
                    </div>
                </div>

                <div style={{display:"flex"}}>
                    <div>
                        <span style={{marginRight:"15px", fontSize:"25px"}}><FontAwesomeIcon icon={faPercent}/></span>
                    </div>
                    <div>
                        <small>Net Margin (%)</small>
                        <p>62.7</p>
                    </div>
                </div>

                <div style={{display:"flex"}}>
                    <div >
                        <span style={{marginRight:"15px", fontSize:"25px"}}><FontAwesomeIcon icon={faChartBar}/></span>
                    </div>
                    <div>
                        <small>Debt</small>
                        <p>INR 165319.98 Cr.</p>
                    </div>
                </div>

                <div style={{display:"flex"}}>
                    <div>
                        <span style={{marginRight:"15px", fontSize:"25px"}}><FontAwesomeIcon icon={faChartBar}/></span>
                    </div>
                    <div>
                        <small>Financial Year</small>
                        <p>2019</p>
                    </div>
                </div>
                  
            </div>            
        </div>
    );
};

export default RevenueDetail;