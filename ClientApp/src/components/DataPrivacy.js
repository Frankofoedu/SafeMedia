import React, { Component } from 'react';

export class DataPrivacy extends Component {
  displayName = DataPrivacy.name

  render() {
    return (
        <div className="privacy-policy">
            <h1>Privacy Policy</h1>
            <section id="privacy-information-we-collect">
                <h3>What information do we collect?</h3>
                <p>We collect information from you when you login with facebook on our web application or report a hate speech.</p>
                <p>
                    When registering on our web application, as appropriate, you may be asked to allow our Application receive your: facebook public data and post_user permission. You may, however, report a hate speech anonymously.
                </p>
            </section>
            <section id="privacy-information-use">
                <h3>What do we use your information for?</h3>
                <p>Any of the information we collect from you may be used in one of the following ways:</p>
                <ul>
                    <li>To personalize your experience. Your information helps us to better respond to your individual needs.</li>
                    <li>To improve our website. We continually strive to improve our website offerings based on the information and feedback we receive from you.</li>
                    <li>To improve customer service. Your information helps us to more effectively respond to your customer service requests and support needs.</li>
                </ul>
                <p>Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested, to administer a contest, promotion, survey or other site feature or to send periodic emails.</p>
        
            </section>
            <section id="privacy-protection">
                <h3>How do we protect your information?</h3>
                <p>We do not store any user's Facebbok data in our platform, all data collected from Facebbook are only use for the porpose of hate speech analysis and never stored in our platform.</p>
                <p>We also require no any identity to report a hate speech on our platform.</p>
            </section>
            
            <section id="privacy-disclose-third-party">
                <h3>Do we disclose any information to outside parties?</h3>
                <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.</p>
            </section>
            <section id="privacy-third-party-links">
                <h3>Third party links</h3>
                <p>Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</p>
            </section>
            <section id="privacy-coppa-complicance">
                <h3>Children's Online Privacy Protection Act Compliance</h3>
                <p>We are in compliance with the requirements of COPPA (Childrens Online Privacy Protection Act), we do not authorize login from anyone under 13 years of age. Our website, products and services are all directed to people who are at least 13 years old or older.</p>
            </section>
            <section id="privacy-online">
                <h3>Online Privacy Policy Only</h3>
                <p>This online privacy policy applies only to information collected through our website and not to information collected offline.</p>
            </section>
            <section id="privacy-consent">
                <h3>Your Consent</h3>
                <p>By using our site, you consent to our web site privacy policy.</p>
            </section>
            <section id="privacy-changes">
                <h3>Changes to our Privacy Policy</h3>
                <p>If we decide to change our privacy policy, we will post those changes on this page and/or update the Privacy Policy modification date below.</p>
            </section>
            <section id="privacy-contact-us">
                <h3>Contacting Us</h3>
                <p>If there are any questions regarding this privacy policy you may contact us using the information below.</p>
                <address className="site-address">
                    <span className="email">i@amansulaiman.me</span> <br />
                    <span className="name">Abdulrahman Sulaiman</span> <br />
                    <span className="phone">+2348148877252</span> <br />
                    <span className="street-address">Flat 12B Hungu House, zaria road, beside Dan Abibi Collection</span> <br />
                    <span className="city-state-zip">Kano, 700224</span>
                    <span className="country">Nigeria</span> <br />
                </address>
            </section>
        </div>
    );
  }
}
