import React, { useState } from "react";
import { Link } from 'react-router-dom';
import pis_logo1 from '../assets/images/pisLogo1.png';
import './Help.css';

const Help = () => {

    const initialFormData = {
        fullName: '',
        email: '',
        message: '',
    };

    

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your issue is recorded');
        console.log("Form submitted:", JSON.stringify(formData));
        setFormData(initialFormData); // Reset the form after submission
    };


    return (
        <>
            <div id="help"></div>
            <header className="help-header">
                <div className="container">
                    <div className="navbar flex">
                        <div className="Logo-Title">
                            <Link to="/" className="logo-title">
                                <img src={pis_logo1} alt="" width={60} />
                                <h1 className="web-title" >PeerInSync</h1>
                            </Link>
                        </div>

                        <nav className="right-part">
                            <ul className="menu-bar">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/About'>About</Link></li>
                                <li>Help</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <main>
                <div className="container ">
                    <div className="help-form-wrapper">
                        <form className="help-form" onSubmit={handleSubmit}>

                            <div className="title-help">
                                <h1>Help Desk</h1>
                                <p>We are here to help</p>
                            </div>

                            <div className="help-input">
                                <label htmlFor="fullName">Full Name:</label><br />
                                <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} required/>
                            </div>

                            <div className="help-input">
                                <label htmlFor="email">Email:</label><br />
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required/>
                            </div>

                            <div className="help-input">
                                <label htmlFor="message">Message:</label><br />
                                <textarea name="message" id="message" cols="30" rows="10" value={formData.message} onChange={handleChange} required ></textarea>
                            </div>

                            <button type="submit" className="help-submit-btn">Submit</button>


                        </form>
                    </div>

                </div>
            </main>

            <footer className="help-footer">
                <div className="container ">
                    <nav className="flex justify-content">
                        <ul className="footer-bar">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/About'>About</Link></li>
                            <li><a href="#help">Help</a></li>
                        </ul>
                        <div className="footer-logo flex">
                            <Link to="/" className="logo-title">
                                <img src={pis_logo1} alt="" width={60} />
                                <h1 className="web-title">PeerInSync</h1>
                            </Link>
                            <p>Connecting Students and Alumni for Mentorship and Growth</p>
                        </div>
                    </nav>
                    <p className="copyright"><i className="ri-copyright-line"></i> 2025 PeerInSync. Built by Student for Students</p>
                </div>
            </footer>
        </>
    );
}

export default Help;