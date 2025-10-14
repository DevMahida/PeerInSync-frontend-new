import React from "react";
import { Link } from 'react-router-dom';
import pis_logo1 from '../assets/images/pisLogo1.png';
import pic_banner from '../assets/images/about-banner-img.png';
import './About.css';

const About = () => {
    return (
        <>
        <div id="about"></div>
            <header className="about-header">
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
                                <li><Link to='/Help'>Help</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            
            <main>
                <section className="about-banner">
                    <div className="container">
                        <h2>About PeerInSync</h2>
                        <p>Building lifelong connection between Alumni and Students </p>
                    </div>
                </section>

                <section className="who-we-are">
                    <div className="container">
                        <h2>Who We Are</h2>
                        </div>
                        <div className="container flex all-center">
                            <div className="col-8">
                                <div className="who-we-are-data">
                                    <p>
                                        PeerInSync is a platform designed to bridge the gap between students and alumni by fostering mentorship, collaboration, and lifelong connections. It helps students gain real-world insights, career guidance, and support from experienced alumni. By creating a space for meaningful interactions and shared learning, PeerInSync encourages personal growth and professional development. Our goal is to build a strong, supportive community where experiences are shared, opportunities are created, and learning never stops.
                                    </p>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="banner-side-img all-center">
                                    <img src={pic_banner} alt="" width="80%" />
                                </div>
                            </div>

                            {/* <p>
                            PeerInSync is a platform designed to bridge the gap between students and alumni by fostering mentorship, collaboration, and lifelong connections. It helps students gain real-world insights, career guidance, and support from experienced alumni. By creating a space for meaningful interactions and shared learning, PeerInSync encourages personal growth and professional development. Our goal is to build a strong, supportive community where experiences are shared, opportunities are created, and learning never stops.
                            </p>
                             */}
                        </div>
                </section>

                <section className="our-mission">
                    <div className="container">
                        <h2>Our Mission</h2>
                        <div className="flex justify-content1">
                            <div className="OM-card">
                                <h3>Connect</h3>
                                <p>Build meaningful relationships between alumni and students.</p>
                            </div>
                            <div className="OM-card">
                                <h3>Mentor & Learn</h3>
                                <p>Share real world insights and guidance for career growth.</p>
                            </div>
                            <div className="OM-card">
                                <h3>Grow Together</h3>
                                <p>Create a lifelong community that evolves with its roles.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="our-vision">
                    <div className="container">
                        <h2>Our Vision</h2>
                        <p>We envision PeerinSync as a platform that grows with its members — a place where stories are shared, opportunities are created, and collaborations thrive.</p>
                    </div>
                </section>
            </main>

            <footer className="about-footer">
                <div className="container ">
                    <nav className="flex justify-content">
                        <ul className="footer-bar">
                            <li><Link to="/">Home</Link></li>
                            <li><a href='#about'>About</a></li>
                            <li><Link to='/Help'>Help</Link></li>
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

export default About;