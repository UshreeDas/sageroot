import React, {useState} from 'react';
import './form.css'; // Import the CSS file
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com';

const UserForm = () => {
    // State for form data
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        pincode: '',
    });

    // State for handling success message
    const [successMessage, setSuccessMessage] = useState('');


    // Handle input changes
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
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
                        text: "We will get back to you soon",
                        icon: "success"
                    });
                    setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        pincode: '',
                    });
                },
                (error) => {
                    console.error('FAILED...', error);
                }
            );
    };

    return (

        <div className='form-c'>

            <div className='get-touch'>
                <p className='free'>Get a free consultation</p>
                <p>For any additional questions regarding the company or our services, feel free to contact us.</p>
            </div>

            <div className="form-container">
                <h2>User Form</h2>
                <form onSubmit={handleSubmit}>
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

                    <div className="form-group">
                        <label>Pincode</label>
                        <input
                            type="text"
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleChange}
                            placeholder="Enter your pincode"
                            required
                        />
                    </div>

                    <button type="submit" className="submit-button">
                        Submit
                    </button>

                    {successMessage && <p className="success-message">{successMessage}
                    </p>}
                </form>
            </div>
        </div>
    );
};

export default UserForm;
