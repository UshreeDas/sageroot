import React, {useState} from "react";
import "./MainPage.css";

function Main() {
    const [fullName, setFullName] = useState("Full Name *");
    const [emailAddress, setemailAddress] = useState("Email Address *");
    const [phoneNumber, setphoneNumber] = useState("Phone Number *");

    const handleInputNameChange = (event) => {
        setFullName(event.target.value);
    };

    const handleInputNameFocus = () => {
        if (fullName === "Full Name * ") {
            setFullName("");
        }
    };    const handleInputEmailChange = (event) => {
        setemailAddress(event.target.value);
    };

    const handleInputEmailFocus = () => {
        if (fullName === "Email Address *") {
            setemailAddress("");
        }
    };
    return (
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
                    <input type="text" id="full-name" name="full-name" className="full-name-input" value={emailAddress}
                           onChange={handleInputEmailChange} onFocus={handleInputEmailFocus}/>
                    <input type="text" id="full-name" name="full-name" className="full-name-input" value={fullName}
                           onChange={handleInputNameChange} onFocus={handleInputNameFocus}/>
                    <input type="text" id="full-name" name="full-name" className="full-name-input" value={fullName}
                           onChange={handleInputNameChange} onFocus={handleInputNameFocus}/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Main;