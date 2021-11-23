
import { faEnvelopeOpen, faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <footer>
            <div className="bg-white footer-top">
                <div className="container">
                    <div className="row margin-four">
                        <div className="col-md-4 col-sm-4 text-center">
                            <FontAwesomeIcon icon={faMobileAlt} className="small-icon black-text" />
                            <h6 class="black-text margin-two no-margin-bottom">313-915-5725 </h6>
                        </div>
                        <div className="col-md-4 col-sm-4 text-center">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="small-icon black-text" />
                            <h6 class="black-text margin-two no-margin-bottom">Fraser, MI 48026</h6>
                        </div>
                        <div className="col-md-4 col-sm-4 text-center">
                            <FontAwesomeIcon icon={faEnvelopeOpen} className="small-icon black-text" />
                            <h6 class="margin-two no-margin-bottom"><a href="mailto:jobs@initialsecure.com" class="black-text">jobs@initialsecure.com</a></h6>
                        </div>
                    </div>
                </div>

                <div className="container-fluid bg-dark-gray footer-bottom">
                    <div className="container">
                        <div className="row margin-three">
                            <div class="col-xs-12 copyright text-center letter-spacing-1 xs-text-center xs-margin-bottom-one">
                                © 2016 Initial Secure Field Services
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;