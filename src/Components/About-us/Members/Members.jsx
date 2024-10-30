import React, { useEffect } from "react";
import "./members.css";

function Members() {
    useEffect(() => {
        const membersContainer = document.querySelector('.members-container');

        function checkVisibility() {
            const rect = membersContainer.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                membersContainer.classList.add('fade-in');
            } else {
                membersContainer.classList.remove('fade-in');
            }
        }

        window.addEventListener('scroll', checkVisibility);
        checkVisibility(); // Check visibility on page load

        return () => {
            window.removeEventListener('scroll', checkVisibility);
        };
    }, []);

    return (
        <div className='members-container'>
            <div className="members-content">
                <div className="members-content-main-title">
                    <p>Our Members</p>
                </div>
                <div className="profile">
                    <figure data-value="Operational manager UK">
                        <img
                            src="https://github.com/DMMPrice/sageroot-images/blob/master/partners/ARGHYA%20BISWAS.jpeg?raw=true"
                            alt=""/>
                        <figcaption>arghya biswas</figcaption>
                    </figure>
                </div>

                <div className="profile">
                    <figure data-value="Operational manager London">
                        <img
                            src="https://github.com/DMMPrice/sageroot-images/blob/master/partners/Hari%20Vardhan%20Murusu.jpeg?raw=true"
                            alt=""/>
                        <figcaption>Hari Vardhan Murusu</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Members;