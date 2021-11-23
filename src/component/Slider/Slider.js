import React from 'react';
import where from '../../Image/where.jpg';
import './Slider.css';
const Slider = () => {
    return (
        <div id="Coverage">
            <div className="bg-image">
                <div class="opacity-medium-two bg-black-two">
                    <h1 className="white-text-two header-one">FROM THE HEART OF MOTOR CITY</h1>
                </div>
            </div>
            <div>
                <div className="bg-gray">
                    <div className='container'>
                        <div className="row">
                            <div className="col-md-6" id="right">
                                <img className="whereImage" src={where} alt="" />
                            </div>
                            <div className="col-md-6">
                                <h1>WHERE ARE WE NOW?</h1>
                                <div class="separator-line bg-black no-margin-lr"></div>
                                <br></br>
                                <p class="text-med width-90">
                                    <strong>Main Office</strong>
                                    <br />
                                    "Fraser, MI 48026"
                                    <br />
                                    "Ph 313-915-5725"
                                    <br />
                                    "Fax 844-494-4211"
                                    <br />
                                    "jobs@initialsecure.com"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Slider;