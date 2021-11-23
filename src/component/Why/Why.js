import React from 'react';
import dynamic from '../../Image/dynamic.jpg';
import mobile from '../../Image/mobile.jpg';
import risk from '../../Image/risk.jpg';
import technology from '../../Image/technology.jpg';
import './Why.css';
const Why = () => {
    return (
        <div id="Why" className="bg-why">
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 className="text-center headingThree">WHY INITIAL SECURE FIELD SERVICE</h1>
            <div class="separator-line bg-black margin-two no-margin-bottom"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="headingThree">DYNAMIC LEADERSHIP</h2>
                        <div class="separator-line bg-black no-margin-lr"></div>
                        <p className="text-med">We at Initial Secure Field Services understand the importance of a well structured organization with clear lines of management from top to bottom. Our company is therefore structured in a way that customers come first, with complaint being swiftly handled. Additionally, Initial Secure Field Services takes into consideration customers’ feedbacks and opinions before implementing any new idea with the focus being on building long term relationships based upon trust and integrity. Furthermore, our success is fast tracked by the leadership of a skilled management that has combined the talents needed to come through in the property preservation industry. Our strong management team has also been able to attract and retain the best staffs in the industry; staffs who undertake and complete the most ambitious practices in property preservation with the aim of satisfying our customers’ needs.</p>
                    </div>
                    <div className="col-md-6">
                        <img className="center-block width-70" src={dynamic} alt="" />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="row">
                    <div className="col-md-6">
                    <img className="center-block width-70" src={mobile} alt="" />
                    </div>
                    <div className="col-md-6">
                    <h2 className="headingThree">MOBILE INTEGRATION</h2>
                        <div class="separator-line bg-black no-margin-lr"></div>
                        <p className="text-med">In recent times, the use of mobile application in property preservation industry has been on the rise and Initial Secure Field Services knows the importance of that. That being said, our IT staffs are on the front edge of that trend and have developed an application that will ensure you’re aware of any activities going on at your property at any given time. Our mobile application allows instant access of who is visiting your property and when, as well as how long they stayed. Since customers are given a priority here at Initial Secure Field Services, our mobile application has been designed to have an advantage over others in the market in the sense that you, the customer, receive information (who visited and when) of your property at the same time as we do, thereby enhancing transparency between you and us. Additionally, our mobile application ensures that decisions can be made much quickly as photos are transferred to you immediately; for instance, in case of any damage to your property.</p>
                        
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="headingThree">RISK MANAGEMENT</h2>
                        <div class="separator-line bg-black no-margin-lr"></div>
                        <p className="text-med">With customer satisfaction being the pride of Initial Secure Field Services, we know how much you value your property; that’s why we have up-to-date and complete insurance cover to ensure your precious assets are well catered for at all times, from the moment you entrust them to us. Additionally, we carry out the preservation with utmost professionalism as we are aware of your reputational and economical risks. We also conduct ongoing maintenance to protect and preserve the assets with activities such as snow removal and lawn maintenance among others. Our approach is therefore geared towards leveraging the fundamental principles of financial risk management. This involves using well researched data which is later applied to develop scientific models that determine where the risks lie. We therefore provide a one of kind risk management practice that provides you with rule writing capabilities and reason code analysis.</p>
                    </div>
                    <div className="col-md-6">
                        <img className="center-block width-70" src={risk} alt="" />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="row">
                    <div className="col-md-6">
                    <img className="center-block width-70" src={technology} alt="" />
                    </div>
                    <div className="col-md-6">
                    <h2 className="headingThree">TECHNOLOGY</h2>
                        <div class="separator-line bg-black no-margin-lr"></div>
                        <p className="text-med">We at Initial Secure Field Services recognize the need to take advantage of the ever changing technology in a dynamic industry where time and quality are of the essence. It’s the reason that we have adopted cutting edge software to manage our customers, their assets and work orders. The software allows automation of ordering and management of our inspection and preservation services, thereby ensuring easy and fast access of data by us as well as our customers. Additionally, our systems are constantly updated with the aim of improving field service productivity by streamlining all the processes of property preservation. Furthermore, to ensure accurate and timely reporting, Initial Secure Field Services utilizes availability of smart phones in taking photos and transferability of high speed internet.</p>
                        
                    </div>
                </div>
                <br />
                <br />
                <br />
            </div>
        </div>
    );
};

export default Why;