import { faCat, faDownload, faLocationArrow, faMapMarkerAlt, faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './BrandDetail.css';
import logo from '../../images/flipkart logo.jpg'

const BrandDetail = () => {
    return (
        <div className='container-fluid'>
            <div className="brandDetail-div">
                <div className='flipkart'>
                    <img src={logo} alt=""/>
                </div>
                <div className='flipkart-private'>
                    <p>Flipkart internet private <br/> Limited-Flipkart</p>
                    <p><FontAwesomeIcon icon={faMapMarkerAlt}/> Kamataka, IN</p>
                </div>
                <div className='compnay-num'>
                    <p>Company number U43943858K93248I4324</p>
                    <p>Age 8 years</p>
                </div>
                <div className='link-area'>
                    <div><a href="#">info@flipkart.in</a></div>
                    <div><a href="#">info@flipkart.in</a></div>
                </div>
                <div className='download'>
                    <div className="d-flex justify-content-end">
                        <div className='download'><FontAwesomeIcon icon={faDownload}/></div>
                        <div>...</div>
                    </div>
                    <p className='text-end'>update date</p>
                </div>
            </div>
        </div>
    );
};

export default BrandDetail;