import React from 'react';
import './BrandName.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import user from '../../images/alamgir.jpg';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const BrandName = () => {
    return (
        <div className="container-fluid brand-div">
            <div className="row">
                <div className="col-md-6">
                    <div className='logo-align'>
                        <a class="navbar-brand fs-1 fw-bolder text-dark ms-4" to="/">Analystt</a>
                    </div>
                </div>
                <div className="col-md-6 mt-3 mb-3">
                    <div className="d-flex justify-content-end">
                        <form class="d-none d-lg-block">
                            <div className="d-flex">
                                <input class="form-control me-2 d-none" type="search" id='search' placeholder="Search" aria-label="Search" />
                                <label style={{width:"10rem", height:"30px", border:"1px solid black", borderRadius:"20px"}} htmlFor="search"><span style={{display:"flex", alignItems:"center", margin:"8px"}}><FontAwesomeIcon  icon={faSearch}/></span> </label>
                            </div>
                        </form>
                        <div className='align ms-4'>
                            <a class="d-block text-primary text-decoration-none fs-5"> WatchList</a>
                        </div>
                        <div className='align ms-4'>
                            <div>
                                <img className="user-img" src={user} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandName;