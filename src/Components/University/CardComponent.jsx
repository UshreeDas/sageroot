import React from 'react';
import './CardComponent.css'; // Import the styles

const CardComponent = ({ imageUrl, flagUrl, collegeName }) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={imageUrl} alt={collegeName} />
            </div>
            <div className="card-content">
                <div className="flag">
                    <img src={flagUrl} alt={`${collegeName} flag`} />
                </div>
                <p>{collegeName}</p>
            </div>
        </div>
    );
};

export default CardComponent;
