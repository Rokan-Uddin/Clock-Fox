import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
const Banner = () => {
    return (
      <div className="container-fluid">
          <div className="banner row">
              <div className="col-lg-6 col-sm-12"></div>
              <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
                  <div>
                      <h1 className="mt-5 banner-text">Wellcome to The Clock Fox</h1>
                      <Link to='/explore' className="shop-now">Shop Now</Link>
                      <p className="p-5 fs-5 banner-description"></p>
                       
                  </div>
              </div>
          </div>
      </div>
    );
};

export default Banner;