import React from "react";
import "./loading.css";

function Loading() {
    return (
        <div className="loading-container">
            <img className="loading-image" src="./loading.gif" alt="Loading..."/>
        </div>
    );
}

export default Loading;