import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
// CODE BY DARSH
import axios from 'axios';

import '../registration_form/Registration.css';
// import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import colleges from '../javaScript/Colleges.js';

const Registration = () => {
    const navigate = useNavigate();

    const initialFormData = {
        fname: '',
        lname: '',
        email: '',
        password: '',
        mobile_no: '',
        cname: '',
        course: '',
        branch: '',
        study_year: '',
        gender: '',
        role: '',
    };

    const [showPassword, setShowPassword] = useState(false);

    const [passwordErrors, setPasswordErrors] = useState([]);

    const handleCollegeChange = (event, newValue) => {
        setFormData(prev => ({
            ...prev,
            cname: newValue ? newValue.label : '',
        }));
    };


    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setFormData({
            ...formData,
            password: value
        });

        const condition = {
            length: value.length >= 8 && value.length <= 16,
            upper: /[A-Z]/.test(value),
            lower: /[a-z]/.test(value),
            number: /\d/.test(value),
            special: /[!@#$%^&*]/.test(value),
        };

        const unmetRules = [];
        if (!condition.length) unmetRules.push("Minimun 8 and Maximum 16 characters");
        if (!condition.upper) unmetRules.push("At least 1 uppercase latter");
        if (!condition.lower) unmetRules.push("At least 1 lowercase latter");
        if (!condition.number) unmetRules.push("At least 1 number");
        if (!condition.special) unmetRules.push("At least 1 special character");

        setPasswordErrors(unmetRules);
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(initialFormData);

        axios.post('https://peerinsync-backend-server.onrender.com/loginRegisterRoutes/signup')
            .then(() => {
                window.alert("You have registered successfully.");
                navigate('/');
                console.log("Form submitted:", formData);
            })

            .catch((err) => {
                console.log(err);
                window.alert("Error submiting data." + err.message);
            });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>

            <main >

                <section className="registration_form">
                    <form onSubmit={handleSubmit} className="form-content">

                        <div className="back-button">
                            <Link to="/"><i className="ri-arrow-left-line"></i></Link>
                        </div>

                        <div className="title-register">
                            <h1>Registration Form</h1>
                            <h5>Register To Level Up</h5>
                        </div>

                        <div className='input-register'>
                            <label htmlFor="fname">First Name:</label><br />
                            <input type="text" name='fname' id='fname' value={formData.fname} onChange={handleChange} required />
                        </div>

                        <div className='input-register'>
                            <label htmlFor="lname">Last Name:</label><br />
                            <input type="text" name='lname' id='lname' value={formData.lname} onChange={handleChange} required />
                        </div>

                        <div className='input-register'>
                            <label htmlFor="email">Email:</label><br />
                            <input type="email" name='email' id='email' value={formData.email} onChange={handleChange} required />
                        </div>

                        <div className='password-register'>
                            <label htmlFor="password">Password:</label><br />
                            <div className='password-container'>
                                <div className="register-password">
                                    <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handlePasswordChange} required />
                                    <i className={showPassword ? "ri-eye-off-line" : "ri-eye-line"} onClick={() => setShowPassword(!showPassword)} style={{ cursor: "pointer" }}></i>
                                </div>

                                {
                                    passwordErrors.length > 0 && (
                                        <ul className='instruction'>
                                            {passwordErrors.map((error, index) => (
                                                <li key={index}>{error}</li>
                                            ))}
                                        </ul>
                                    )
                                }
                            </div>
                        </div>

                        <div className='input-register'>
                            <label htmlFor="mobile_no">Mobile No.:</label><br />
                            <input type="tel" name='mobile_no' id='mobile_no' maxLength={10} pattern="[0-9]{10}" inputMode='numeric' value={formData.mobile_no} onChange={handleChange} required />
                        </div>

                        <div className='college-select'>
                            <Autocomplete
                                disablePortal
                                id="cname"
                                options={colleges}
                                sx={{ width: '100%' }}
                                value={colleges.find(option => option.label === formData.cname) || null}
                                onChange={handleCollegeChange}
                                renderInput={(params) => (
                                    <TextField {...params} label="Select College" required />
                                )}
                            />
                        </div>

                        <div className='input-register'>
                            <label htmlFor="study_year">Current Year of Studying:</label><br />
                            <input type="text" name='study_year' id='study_year' value={formData.study_year} onChange={handleChange} required />
                        </div>

                        <div className='input-register'>
                            <label htmlFor="course">Course:</label><br />
                            <input type="text" name='course' id='course' value={formData.course} onChange={handleChange} required />
                        </div>

                        <div className='input-register'>
                            <label htmlFor="branch">Branch:</label><br />
                            <input type="text" name='branch' id='branch' value={formData.branch} onChange={handleChange} required />
                        </div>

                        <div className='Gender'>
                            <span>Gender : </span>
                            <input type="radio" name='gender' value="male" id='male' required checked={formData.gender == "male"} onChange={handleChange} />
                            <label htmlFor="male">Male</label>
                            <input type="radio" name='gender' value="female" id='female' checked={formData.gender == "female"} onChange={handleChange} />
                            <label htmlFor="female">Female</label>
                            <input type="radio" name='gender' value="others" id='others' checked={formData.gender == "others"} onChange={handleChange} />
                            <label htmlFor="others">Others</label>
                        </div>

                        <div className='User'>
                            <span>Join As : </span>
                            <input type="radio" name='user' value="alumni" id='Alumni' required checked={formData.user == "alumni"} onChange={handleChange} />
                            <label htmlFor="Alumni">Alumni</label>
                            <input type="radio" name='user' value="student" id='Student' checked={formData.user == "student"} onChange={handleChange} />
                            <label htmlFor="Student">Student</label>
                        </div>

                        <button type="submit" className='reg_button'>Register</button>
                    </form>
                </section>

            </main>


        </>
    );

}
export default Registration;