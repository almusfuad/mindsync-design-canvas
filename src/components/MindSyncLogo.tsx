
import React from 'react';

interface LogoProps {
  className?: string;
}

const MindSyncLogo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <svg
      viewBox="0 0 800 800"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path 
          fill="#00A3E0" 
          d="M400,150c-83.6,0-151.5,67.9-151.5,151.5c0,45.2,19.8,85.7,51.2,113.5c-8.1,14.9-18.9,28.4-32.8,39.6
          c-14.9,12-33.3,20.9-55.9,23.9c-3.8,0.5-6.4,4-5.9,7.8c0.5,3.4,3.4,5.9,6.8,5.9c0.3,0,0.7,0,1-0.1c26.3-3.5,48-13.8,65.4-27.8
          c16.2-13.1,28.9-29.1,38.3-46.5c24.1,13.5,51.9,21.2,81.4,21.2c83.6,0,151.5-67.9,151.5-151.5S483.6,150,400,150z" 
        />
        <circle fill="#00A3E0" cx="400" cy="220" r="25"/>
        <circle fill="#00A3E0" cx="400" cy="390" r="25"/>
        <circle fill="#00A3E0" cx="310" cy="220" r="25"/>
        <circle fill="#00A3E0" cx="310" cy="390" r="25"/>
        <circle fill="#00A3E0" cx="490" cy="220" r="25"/>
        <circle fill="#00A3E0" cx="490" cy="390" r="25"/>
        <path 
          fill="#00A3E0" 
          d="M310,245v120M400,245v120M490,245v120M335,220h130M335,390h130"
          strokeWidth="15"
          stroke="#00A3E0"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default MindSyncLogo;
