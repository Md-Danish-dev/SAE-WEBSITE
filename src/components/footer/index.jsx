import React from "react";
import './footer.css';
import Logo from '../../assets/logo.png';
import Instagram from '../../assets/icons/instagram.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Youtube from '../../assets/icons/youtube.svg';

function Footer() {
    return (
        <>
        <div className="footer">
            <img src={Logo} alt="logo" className="footerLogo"/>
            <div className="footerInfo">
                <div className="detailsCol">
                    <h4>Address</h4>
                    <p>Sample Department Name, Sample University, 123456, Sample State, Sample Country</p>
                </div>
                <div className="detailsCol">
                    <h4>Contact</h4>
                    {/* <p>John Doe - +91-1234567890</p>
                    <p>Jane Smith - +91-0987654321</p> */}
                    <p>Sample Name 1 - +91-1234567890</p>
                    <p>Sample Name 2 - +91-0987654321</p>
                    <p>Sample Name 3 - +91-1122334455</p>
                </div>
                <div className="detailsCol">
                    <h4>Email</h4>
                    <p>sample@example.com</p>
                </div>
                <div className="socialLinks">
                    <p style={{cursor: 'pointer'}} onClick={() => {
                        window.open('https://www.facebook.com/samplepage', '_blank');
                    }}>
                        <img src={ Facebook } /> Facebook
                    </p>
                    <p style={{cursor: 'pointer'}} onClick={() => {
                        window.open('https://www.linkedin.com/company/sample-company/', '_blank');
                    }}>
                        <img src={ Youtube } /> LinkedIn
                    </p>
                    <p style={{cursor: 'pointer'}} onClick={() => {
                        window.open('https://www.instagram.com/samplepage/', '_blank');
                    }}>
                        <img src={ Instagram } /> Instagram
                    </p>
                </div>
            </div>
        </div>
        <div className="copyright">
            © Copyright 2025 | Sample Organization Name | All Rights Reserved.
        </div>
        </>
    )
}

export default Footer;