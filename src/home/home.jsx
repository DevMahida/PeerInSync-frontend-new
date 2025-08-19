import React from "react";
import { Link } from 'react-router-dom';
import pis_logo from '../assets/pisLogo.png';
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
                    <div className="navbar">
                        <div className="Logo-Title">
                            <Link to="/" className="logo-title">
                                <img src={pis_logo} alt="" width={60} />
                                <h1 className="web-title">PeerInSync</h1>
                            </Link>

                        </div>
                        <div className="menu-bar">
                            <span>Home</span>
                            <span>About</span>
                            <span>Help</span>
                        </div>

                        <div className="home-buttons">
                            <div className="register_button">
                                <Link to="/Registration">Register</Link>
                            </div>
                            <div className="Login-button">
                                <Link to="/Login">Login</Link>
                            </div>
                        </div>
                    </div>


                </div >

            </header>

            <div>
                {backendGreet && <p> Response from backend: {backendGreet}</p>}
            </div>






        </>
    );
}

export default Home;