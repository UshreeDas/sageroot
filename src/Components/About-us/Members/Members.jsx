import { useEffect } from "react";
import Partners from "./Partners";
import "./members.css";

function Members() {

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    } else {
                        entry.target.classList.remove('show');
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the element is in view
        );

        const element = document.querySelector('.members-container');
        if (element) observer.observe(element);

        return () => observer.disconnect(); // Clean up the observer on unmount
    }, []);

    return (
        <div className='members-container'>
            <Partners />
        </div>
    )
}

export default Members;