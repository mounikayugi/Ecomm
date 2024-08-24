import React from 'react'
import './Footer.css'
import footer_logo from '../Assests/footer.jpeg'
import instaram_icon from '../Assests/instagram_icon.jpeg'
import pintester_icon from '../Assests/pintester.png'
import whatsapp_icon from '../Assests/whatsapp_icon.jpeg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>MY STORE</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instaram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Right Reserved</p>
            </div>
        </div>
    )
}
export default Footer;