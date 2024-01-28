import React from 'react';

interface SliderArrowProps {
  flip?: boolean;
  onClick?: () => void;
}

const SliderArrow: React.FC<SliderArrowProps> = ({ flip, onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 21 41"
    style={{
      transform: `rotate(${flip ? 180 : 0}deg)`,
      width: '35px',
      height: '35px',
      cursor: 'pointer',
      transition: 'fill 0.3s', // Add transition for smooth color change
    }}
    onClick={onClick}
    onMouseOver={(e) => e.currentTarget.style.fill = 'rgba(255, 255, 255, 0.8)'} // Slightly darker white on hover
  >
    <path d="M20.3 40.8 0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z" fill="white"></path>
  </svg>
);

export default SliderArrow;

