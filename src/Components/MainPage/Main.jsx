import React, {useState} from "react";
import "./MainPage.css";
import University from "../University/University";

function Main() {
    const [fullName, setFullName] = useState("Full Name *");
    const [emailAddress, setEmailAddress] = useState("Email Address *");
    const [phoneNumber, setPhoneNumber] = useState("Phone Number *");
    const [pinCode, setPinCode] = useState("Pin Code *");

    const handleInputNameChange = (event) => {
        setFullName(event.target.value);
    };

    const handleInputNameFocus = () => {
        if (fullName === "Full Name *") {
            setFullName("");
        }
    };
    const handleInputEmailChange = (event) => {
        setEmailAddress(event.target.value);
    };

    const handleInputEmailFocus = () => {
        if (emailAddress === "Email Address *") {
            setEmailAddress("");
        }
    };
    const handleInputPhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleInputPhoneNumberFocus = () => {
        if (phoneNumber === "Phone Number *") {
            setPhoneNumber("");
        }
    };
    const handleInputPinCodeChange = (event) => {
        setPinCode(event.target.value);
    };

    const handleInputPinCodeFocus = () => {
        if (pinCode === "Pin Code *") {
            setPinCode("");
        }
    };

    return (
        <div>
            <div className="Main">
                <div className="grid-item item1">
                    <p>Get in touch with us today</p>
                </div>
                <div className="grid-item item2">
                    <p>Take the First Step to STUDY ABROAD</p>
                </div>
                <div className="grid-item form-container">
                    <form>
                        <input type="text" id="full-name" name="full-name" className="full-name-input" value={fullName}
                               onChange={handleInputNameChange} onFocus={handleInputNameFocus}/>
                        <input type="text" id="full-name" name="email-address" className="full-name-input"
                               value={emailAddress}
                               onChange={handleInputEmailChange} onFocus={handleInputEmailFocus}/>
                        <input type="text" id="full-name" name="phone-number" className="full-name-input"
                               value={phoneNumber}
                               onChange={handleInputPhoneNumberChange} onFocus={handleInputPhoneNumberFocus}/>
                        <input type="text" id="full-name" name="pin-code" className="full-name-input" value={pinCode}
                               onChange={handleInputPinCodeChange} onFocus={handleInputPinCodeFocus}/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
            <University/>
        </div>
    )
}

export default Main;