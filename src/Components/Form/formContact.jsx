
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
            .send('service_2qon6au', 'template_wy8ypul', formData, 't5UxoD8f8MHhoKvUO')
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
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.041939819465!2d88.39946977507559!3d22.50260957954158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0273fb5271a57f%3A0x536757469ececd6e!2sKidZee%20Madurdaha!5e0!3m2!1sen!2sin!4v1729701561222!5m2!1sen!2sin"
                            width="600"
                            height="380"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map Location"
                        ></iframe>
                    </div>

                    <div className="social">
                        <a href="https://wa.me/+916291799937" target="_blank"   >
                            <i class="bi bi-whatsapp"></i>
                        </a>

                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info.sageroots@gmail.com" target="_blank"   >
                            <i class="bi bi-envelope"></i>
                        </a>
                        <a href="/" target="_blank"   >
                            <i class="bi bi-linkedin"></i>
                        </a>
                        <a href="/" target="_blank"   >
                            <i class="bi bi-facebook"></i>
                        </a>
                    </div>

                </div>

                <div className="form-container">
                    <h2>Get in Touch </h2>
                    <form onSubmit={handleSubmit}>
                        {/* Step 1: Name, Phone, Email */}
                        {step === 1 && (
                            <>
                                <div className="step-devision">

                                    <div className="form-group">
                                        {/* <label>Name</label> */}
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
                                        {/* <label>Phone</label> */}
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Enter your phone number"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="step-devision">
                                    <div className="form-group">
                                        {/* <label>Email</label> */}
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        {/* <label>Subject Major</label> */}
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
                                </div>
                                <div className="step-devision">
                                    <div className="form-group">
                                        {/* <label>Choice of Country</label> */}
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
                                        {/* <label>Financial Assistance Required</label> */}
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
                                </div>

                                <button type="submit" className="submit-button">
                                    Submit
                                </button>
                            </>
                        )}

                        {/* {successMessage && <p className="success-message">{successMessage}</p>} */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormContact;