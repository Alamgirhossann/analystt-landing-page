import React from 'react';
import './CompanyDetail.css';

const CompanyDetail = () => {
    return (
        <div className='container-fluid'>
            <div className="grid-style">
                <div>
                    <h5>Details</h5>
                    <div>
                        <small>Company Type</small>
                        <p>It&Ites</p>
                    </div>
                    <div>
                        <small>Category</small>
                        <p>It&Company limited by shares</p>
                    </div>
                    <div>
                        <small>Paidup Capital</small>
                        <p>INR 100 Crore</p>
                    </div>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <div>
                        <small>Related Names</small>
                        <p>Flipkart Internet Limited</p>
                    </div>
                    <div>
                        <small>Category</small>
                        <p>It&Company limited by shares</p>
                    </div>
                    <div>
                        <small>Paidup Capital</small>
                        <p>INR 100 Crore</p>
                    </div>
                </div>
                <div>
                    <h5>About</h5>
                    <p>Flipkart was founded in October 2007 by Sachin Bansal and Binny Bansal. It is one of India’s leading E-commerce marketplaces and is headquartered in Bengaluru. The company initially started as an online bookstore. </p>
                    <div className="hastag">
                        <p>#tags</p>
                        <p>#company</p>
                        <p>#internet</p>
                    </div>
                    <p>#technologies</p>
                </div>
                <div>
                    <h5>Address</h5>
                    <p>Lower Parel, Friends Colony, Kurla West, Kurla, Mumbai, Maharashtra 400070</p>
                </div>
            </div>
        </div>
    );
};

export default CompanyDetail;