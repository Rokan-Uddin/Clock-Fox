import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="bg-dark text-white mt-0 p-4 mt-5">
            <div className="row">
            <div className="col-6">
                <h3 className="">Contact us</h3>
                <p className="text-start ms-lg-5 ps-lg-5"><i className="fas fa-phone me-3"></i> Phone: +88018500500</p>
                <p className="text-start ms-lg-5 ps-lg-5"><i className="fas fa-envelope me-3"></i> Email: worldtour@gmail.com</p>
                <p className="text-start ms-lg-5 ps-lg-5"> <i className="fas fa-map-marker-alt me-3"></i> Address: Khulsi,Chittagong</p>
              </div>
                <div className="col-6">
                    <div>
                        <h4 className="text-primary ">Follow us</h4>
                        <i className="fab fa-facebook mx-2"></i>
                        <i className="fab fa-instagram-square mx-2"></i>
                        <i className="fab fa-linkedin mx-2"></i>
                        <i className="fab fa-youtube mx-2"></i>
                    </div>
                     <div>
                        <h4 className="text-success mt-4">We accept:</h4>
                        <i className="fab fa-cc-mastercard  mx-2"></i>
                        <i className="fab fa-cc-visa mx-2"></i>
                        <i className="fab fa-cc-paypal mx-2"></i>
                        <i className="fas fa-credit-card mx-2"></i>
                     </div>
                </div>
            </div>
            <span>Copyright <i className="fas fa-copyright mt-4"></i> 2021</span>
        </div>
    );
};

export default Footer;