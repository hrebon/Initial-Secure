import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <div id="Contact" className="xs-onepage-section bg-gray margin-top-section">
            <div className="container middle">
                <div class="row" >
                    <div class="col-md-5 col-sm-6">
                        <h1 className="headingThree">CONTACT US</h1>
                        <p className="text-med">Drop us an email if you have any questions, We always try to get back to you within 24 hours.</p>
                        <p className="text-med">
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
                    <div class="col-md-5 col-sm-6 no-border-round">
                    <div className="emailLoader">
                            <div className="uil-ring-css">
                                <div></div>
                            </div>
                        </div>

                        <form id="free30daytrialform">
                            <div id="success-free30daytrial" class="no-margin-lr" style={{ display: 'none' }}></div>
                            <div class="form-group no-margin-bottom">
                                <input type="text" class="text-edit" id="name" name="name" minlength="3" placeholder="Your Name" required="" />
                            </div>
                            <div class="form-group no-margin-bottom">
                                <input type="text" class="text-edit" id="email" name="email" placeholder="Your Email" />
                            </div>
                            <div class="form-group no-margin-bottom">
                                <input type="text" class="text-edit" id="phone" name="phone" placeholder="Your Phone" />
                            </div>
                            <div class="form-group no-margin-bottom">
                                <textarea  class="text-edit" placeholder="Your Message" minlength="3" name="message" required=""></textarea>
                            </div>
                            <div class="form-group no-margin-bottom">
                                <div class="g-recaptcha" style={{ marginBottom: '20px' }} data-sitekey="6LcjAUcUAAAAAAkzV0yOpZ2jTvT9ri1HA6f0Ts_C"><div style={{ width: '304px', height: '78px' }}><div><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6LcjAUcUAAAAAAkzV0yOpZ2jTvT9ri1HA6f0Ts_C&amp;co=aHR0cDovL2luaXRpYWxzZWN1cmUuY29tOjgw&amp;hl=en&amp;v=_7Co1fh8iT2hcjvquYJ_3zSP&amp;size=normal&amp;cb=sxmvlkum0k3r" width="304" height="78" role="presentation" name="a-d44afdxs2kji" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style={{ width: '250px', height: '40px', border: '1px solid rgb(193, 193, 193),', margin: '10px 25px', padding: '0px', resize: 'none', display: 'none' }}></textarea></div><iframe style={{ display: 'none' }}></iframe></div>
                            </div>
                            <button type="submit" name="free30daytrial-button" id="free30daytrial-button" class="btn-success btn btn-medium  button button-3d btn-round no-margin">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;