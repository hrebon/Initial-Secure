import React from 'react';
import aboutImg from '../../Image/about.jpg';
import why from '../../Image/why.jpg';
import './About.css';
const About = () => {
    return (
        <div id="About">
            <br />
            <div class="point container">
                <h2>INITIAL SECURE FIELD SERVICE</h2>
                <p>UNLOCKING YOUR PROPERIES POTENTIAL</p>
                <div class="separator-line bg-black margin-two no-margin-bottom"></div>
                <div class="row first-component">
                    <div className="col-md-6 one">
                        <h1 class="titleTwo">WHO IS INITIAL SECURE FIELD SERVICES?</h1>
                        <div class="separator-line bg-black no-margin-lr"></div>
                        <p class="text-med">
                            Offering a wide variety of services including REO services, property preservation, inspection and rehabilitation as well as pre-foreclosure and post-foreclosure management, we are one of the premier property preservation companies in the country, if not the best. Additionally, we offer services such as trash-outs, lawn maintenance or landscaping, sales cleans and initial secures among others. Our foundation is based on the provision of a service that aims at satisfying our customers’ needs. With unrivalled experience in property preservation, we strive to meet all our customers’ demands and requirements at the first time of asking and in a timely manner. Furthermore, to coordinate and provide our services, we use advanced information technology as well as employ friendly and skilled staffs with years of experience in property preservation to provide the utmost quality possible. Our core aim is to provide property preservation services of the highest quality at reasonable market rates with the fastest turnaround time (of course without compromising quality). Let Initial Secure be your preferred property preservation company as we guarantee cost-effective solutions for your valuable assets.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img className="imageOne" src={aboutImg} alt="" />
                    </div>
                </div>

                <div class="row first-component">
                    <div className="col-md-6 one">
                        <img className="imageOne" src={why} alt="" />

                    </div>
                    <div className="col-md-6">
                        <h1 class='titleTwo'>WHY IS INITIAL SECURE FIELD SERVICES DIFFERENT?</h1>
                        <div class="separator-line bg-black no-margin-lr"></div>
                        <p class="text-med-two">
                        With honesty and integrity at the forefront, we pride ourselves at ensuring customers are given the utmost priority. We therefore put effort in ensuring there is open communication between you, the customer, and us by establishing strong interpersonal relationships right from the start. In addition, to ensure we achieve the ultimate goal of preserving and securing your assets, we carry out criminal background checks on our staffs before hiring them. This guarantees that only the best and true professionals handle your property. We also mould the staffs into our own liking to ensure they understand that customers are our number one priority. We further provide them (our staffs) with monthly training sessions to instill any new industry regulations and requirements.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;