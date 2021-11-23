import React from 'react';
import image from '../../Image/logo-light.png';
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top bar">
                <div class="container">
                    <div>
                       <a class='image' href="#Home"><img src={image} alt="" /></a> 
                        
                    </div>
                    <button class="navbar-toggler bg-info ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="span " class="navbar-toggler-icon "></span>
                    </button>
                    <div class="collapse navbar-collapse text-black nav-header" id="navbarNav">
                        <div class="ms-auto">
                            <ul class="navbar-nav navigation-bar">
                                <li class="nav-item link ">
                                    <a class="nav-link  active "   aria-current="page" href="#Home">HOME</a>
                                </li>
                                <li class="nav-item link ">
                                    <a class="nav-link  active "  href="#About">ABOUT</a>
                                </li>
                                <li class="nav-item link ">
                                    <a class="nav-link   active "  href="#Coverage">COVERAGE</a>
                                </li>
                                <li class="nav-item link">
                                    <a class="nav-link  active "  href="#Why">WHY</a>
                                </li>
                                <li class="nav-item link ">
                                    <a class="nav-link  active "  href="#Contact">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default Header;