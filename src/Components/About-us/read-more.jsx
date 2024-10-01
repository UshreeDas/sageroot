import React, { useState } from 'react';

const ReadMore = ({ children, maxLength = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const content = isExpanded ? children : `${children.substring(0, maxLength)}...`;

  return (
    <div>
      <p>{content}</p>
      <button onClick={toggleReadMore}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

export default ReadMore;
