import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Login/Login.css';
import axios from 'axios';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);


    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Data:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <main>
                <section className='login-form'>
                    <form onSubmit={handleSubmit}>

                        <div className='back-button'>
                            <Link to="/"><i class="ri-arrow-left-line"></i></Link>
                        </div>

                        <div className='title-login'>
                            <h1>Login</h1>
                            <h5>Login to connect with <br />our website</h5>
                        </div>


                        <div className="input-login">
                            <i class="ri-mail-line"></i>
                            <input type="email" placeholder="Email Id" name="email" value={formData.email} onChange={handleChange} autoComplete='additional-name' required />
                        </div>

                        <div className="input-login">
                            <i class="ri-lock-password-line"></i>
                            
                            <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />

                            <i className={showPassword ? "ri-eye-off-line" : "ri-eye-line"} onClick={() => setShowPassword(!showPassword)} style={{ cursor: "pointer" }}></i>
                        </div>

                        <div className='forget-password'>
                            <span>Forgot Password</span>
                        </div>

                        <div className='login-button'>
                            <button type='submit'>Login</button>
                        </div>

                    </form>
                </section>
            </main>
        </>
    );
}

export default Login;