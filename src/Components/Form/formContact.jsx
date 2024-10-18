
import React, { useState } from 'react';
import './formContact.css'; // Import the CSS file
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

const FormContact = () => {




    // State for form data
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subjectMajor: '',
        choiceOfCountry: '',
        financialAssistanceRequired: '',
    });

    // State for the current step
    const [step, setStep] = useState(1);

    // State for handling success message
    const [successMessage, setSuccessMessage] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Go to next step
    const handleNextStep = () => {
        setStep(step + 1);
    };

    // Go to previous step (optional, if you want a back button)
    const handlePreviousStep = () => {
        setStep(step - 1);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // EmailJS sending logic
        emailjs
            .send('service_x8pd9xp', 'template_14j7pc2', formData, '2zRkZZwe0o7G6CsSE')
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setSuccessMessage('Form submitted successfully!');
                    Swal.fire({
                        title: "Thank you for reaching us!",
                        text: "We will contact you soon",
                        icon: "success"
                    });
                    setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        subjectMajor: '',
                        choiceOfCountry: '',
                        financialAssistanceRequired: '',
                    });
                    setStep(1); // Reset form to the first step
                },
                (error) => {
                    console.error('FAILED...', error);
                }
            );
    };

    const subjects = ['Engineering', 'Master of Science', 'Medical', 'Law', 'Business', 'PhD', 'Finance'];
    const countries = ['USA', 'Canada', 'India', 'UK', 'Australia', 'Germany', 'France'];

    return (
        <div className="contuct-us">
            <div className='element'><h1>Start Your Journey Today!</h1></div>
          
        <div className='form-c'>
        <div className="location">
            <div >
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54674.13627271636!2d77.11782150548234!3d31.078212851078575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390578e3e35d6e67%3A0x1f7e7ff6ff9f54b7!2sShimla%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1729259499606!5m2!1sen!2sin"
                width="600"
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
            ></iframe>
        </div>
        <div className="contact-info">
        <div className="contact-details">
            <p className='ico-email'><i class="bi bi-envelope-at"></i> Email: info.sageroots@gmail.com</p>
            <p className='ico-number'><i class="bi bi-telephone-fill"></i> Phone: 6291799937</p>
        </div>
        <div className="social">
        <i class="bi bi-whatsapp"></i>
        <i class="bi bi-envelope"></i>
        <i class="bi bi-linkedin"></i>
        <i class="bi bi-facebook"></i>
        </div>
        </div>
        </div>
       
            <div className="form-container">
                <h2>Get in Touch </h2>
                <form onSubmit={handleSubmit}>
                    {/* Step 1: Name, Phone, Email */}
                    {step === 1 && (
                        <>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <button type="button" onClick={handleNextStep} className="next-button">
                                Next
                            </button>
                        </>
                    )}

                    {/* Step 2: Subject Major, Choice of Country, Financial Assistance */}
                    {step === 2 && (
                        <>
                            <div className="form-group">
                                <label>Subject Major</label>
                                <select
                                    name="subjectMajor"
                                    value={formData.subjectMajor}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Program</option>
                                    {subjects.map((subject) => (
                                        <option key={subject} value={subject}>
                                            {subject}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Choice of Country</label>
                                <select
                                    name="choiceOfCountry"
                                    value={formData.choiceOfCountry}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select a country</option>
                                    {countries.map((country) => (
                                        <option key={country} value={country}>
                                            {country}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Financial Assistance Required</label>
                                <select
                                    name="financialAssistanceRequired"
                                    value={formData.financialAssistanceRequired}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>

                            <button type="button" onClick={handlePreviousStep} className="previous-button">
                                Previous
                            </button>

                            <button type="submit" className="submit-button">
                                Submit
                            </button>
                        </>
                    )}

                    {successMessage && <p className="success-message">{successMessage}</p>}
                </form>
            </div>
            </div>
        </div>
    );
};

export default FormContact;