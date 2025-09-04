import React from "react";
import { Link } from 'react-router-dom';
import pis_logo1 from '../assets/images/pisLogo1.png';
import al_dicret from '../assets/images/alumni-directory.png';
import mem_prog from '../assets/images/membership-program.png';
import event_cal from '../assets/images/event-calender.png';
import dis_forums from '../assets/images/discussion-forums.png';
import profile from '../assets/images/profile.png';
import profile1 from '../assets/images/profile1.png';
import collab from '../assets/images/collaboration.png';

import './home.css';

//CODE BY DARSH
import axios from 'axios';
import { useState, useEffect } from "react";



const Home = () => {

    const [backendGreet, setBackendGreet] = useState("Cannot retrieve data from backend :/");

    useEffect(() => {

        axios.get('https://peerinsync-backend-server.onrender.com/hello')
            .then((res) => {

                const data = res.data;
                setBackendGreet(data);
            })
            .catch((err) => {

                console.log(err);
            })
    }, []);


    return (
        <>
            <header className="home-header">
                <div className="container">
                    <div className="navbar flex">
                        <div className="Logo-Title">
                            <Link to="/" className="logo-title">
                                <img src={pis_logo1} alt="" width={60} />
                                <h1 className="web-title">PeerInSync</h1>
                            </Link>
                        </div>

                        <nav className="right-part">
                            <ul className="menu-bar">
                                <li>Home</li>
                                <li>About</li>
                                <li>Help</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <main>
                <section className="banner">
                    <div className="container">
                        <h2>Connecting Student and Alumni For Mentorship, Career and Growth</h2>
                        <p>A platform to guide, connect and inspire students through Alumni experience and industry insights </p>
                        <div className="banner-button">
                            <Link to="/Registration"><button type="button">Join Us</button></Link>
                            <Link to="/Login"><button type="button">Login</button></Link>
                        </div>


                    </div>
                </section>

                <section className="why-us">
                    <div className="container">
                        <h2>Why PeerInSync?</h2>
                        <div className="card-container flex content">
                            <div className="card">
                                <img src={al_dicret} alt="" />
                                <h3>Alumni Directory</h3>
                                <p>Find and Connect with Alumni</p>
                            </div>
                            <div className="card">
                                <img src={mem_prog} alt="" />
                                <h3>Membership Program</h3>
                                <p>One-on-one guidance from industry experts</p>
                            </div>
                            <div className="card">
                                <img src={event_cal} alt="" />
                                <h3>Event Calender</h3>
                                <p>Stay updated with upcoming webinars, seminars, and alumni talks</p>
                            </div>
                            <div className="card">
                                <img src={dis_forums} alt="" />
                                <h3>Discussion Forums</h3>
                                <p>Connect, collaborate, and share industry insights.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="works">
                    <div className="container">
                        <h2>How It Works</h2>
                        <div className="card-container flex content ">
                            <div className="card">
                                <img src={profile} alt="" />
                                <h3>Sign up as</h3>
                                <p>Student or Alumni</p>
                            </div>
                            <div className="card">
                                <img src={profile1} alt="" />
                                <p>Build your profile & interests</p>
                            </div>
                            <div className="card">
                                <img src={collab} alt="" />
                                <h3>Connect-Learn</h3>
                                <p>& Collaborate</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="home-footer">
                <div className="container ">
                    <nav className="flex justify-content">
                        <ul className="footer-bar">
                            <li>Home</li>
                            <li>About</li>
                            <li>Help</li>
                        </ul>
                        <div className="footer-logo flex">
                            <Link to="/" className="logo-title">
                                <img src={pis_logo1} alt="" width={60} />
                                <h1 className="web-title">PeerInSync</h1>
                            </Link>
                            <p>Connecting Students and Alumni for Mentorship and Growth</p>
                        </div>
                    </nav>
                    <p className="copyright"><i class="ri-copyright-line"></i> 2025 PeerInSync. Built by Student for Studnets</p>
                </div>
            </footer>

            {/* <div>
                {backendGreet && <p> Response from backend: {backendGreet}</p>}
            </div> */}






        </>
    );
}

export default Home;