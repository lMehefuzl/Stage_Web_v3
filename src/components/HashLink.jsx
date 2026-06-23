import React from 'react';

const HashLink = ({ href, className, children, style }) => {
  return (
    <a 
      href={href} 
      className={className} 
      style={style}
      onClick={(e) => e.preventDefault()}
    >
      {children}
    </a>
  );
};

export default HashLink;