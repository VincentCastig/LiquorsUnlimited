import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        phone: '',
        message: '',
    });

    const [errors, setErrors] = useState({});


    useEffect(() => {
        emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    }, []);


    const validateForm = () => {
        const newErrors = {};
        if (!formData.user_name) newErrors.user_name = 'Name is required';
        if (!formData.user_email) newErrors.user_email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.user_email)) newErrors.user_email = 'Email address is invalid';
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        console.log('handling');

        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            // Submit form logic here
            console.log('Form bbb submitted:', formData);


            // EmailJS send function
            emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, formData)
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setFormData({ user_name: '', user_email: '', phone: '', message: '' });
                    setErrors({});
                    alert('Thank you for reaching out! We will get back to you soon.');
                }, (error) => {
                    console.error('FAILED...', error);
                    alert('An error occurred. Please try again later.');
                });
        }
    };

    return (
        <div className="contact-form-container" style={containerStyle}>
            <h2 style={headerStyle}>Contact Us</h2>
            <form onSubmit={handleSubmit} style={formStyle}>
                <div style={inputGroupStyle}>
                    <label style={labelStyle} htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="Your Name"
                    />
                    {errors.user_name && <span style={errorStyle}>{errors.user_name}</span>}
                </div>

                <div style={inputGroupStyle}>
                    <label style={labelStyle} htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="Your Email"
                    />
                    {errors.user_email && <span style={errorStyle}>{errors.user_email}</span>}
                </div>

                <div style={inputGroupStyle}>
                    <label style={labelStyle} htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="Your Phone (optional)"
                    />
                </div>

                <div style={inputGroupStyle}>
                    <label style={labelStyle} htmlFor="message">Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        style={{ ...inputStyle, height: '100px' }}
                        placeholder="Your Message"
                    />
                    {errors.message && <span style={errorStyle}>{errors.message}</span>}
                </div>

                <button type="submit" style={buttonStyle}>Send Message</button>
            </form>
        </div>
    );
};

// Inline styles for simplicity
const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f8f8f8',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const headerStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
};

const inputGroupStyle = {
    marginBottom: '15px',
};

const labelStyle = {
    marginBottom: '5px',
    color: '#555',
    fontWeight: 'bold',
};

const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box',
};

const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
};

const errorStyle = {
    color: 'red',
    fontSize: '14px',
    marginTop: '5px',
};

export default ContactForm;
