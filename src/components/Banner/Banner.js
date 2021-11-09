import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Banner.css';
const Banner = () => {
    const {user}= useAuth();
    return (
      <div className="container-fluid">
          <div className="banner row">
              <div className="col-lg-6 col-sm-12"></div>
              <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
                  <div>
                      <h1 className="mt-5 banner-text">Wellcome to The Clock Fox</h1>
                      <p className="p-5 fs-5 banner-description">“ Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, modi! ”</p>
                        {
                            !user.email && <Link to='/login' className="myButton" >Sign In</Link>
                        }
                  </div>
              </div>
          </div>
      </div>
    );
};

export default Banner;