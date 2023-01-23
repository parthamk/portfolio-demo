import React from 'react';

function Blob() {
  return (
    <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stopColor="rgba(55, 74.749, 248, 1)" offset="0%"></stop>
          <stop id="stop2" stopColor="rgba(112.821, 251, 31, 1)" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path fill="url(#sw-gradient)" d="M20.9,-34.4C26.4,-29,29.7,-22,33,-15C36.2,-8,39.3,-1,39.9,6.8C40.5,14.6,38.6,23.2,32.7,26.4C26.9,29.6,17.2,27.5,9.4,27.9C1.6,28.4,-4.3,31.4,-8.9,30.1C-13.5,28.8,-16.9,23.2,-22.9,18.5C-29,13.9,-37.8,10.3,-41.4,4.2C-45.1,-1.9,-43.6,-10.6,-38.5,-16C-33.5,-21.4,-25,-23.5,-18,-28.3C-11,-33.1,-5.5,-40.5,1.1,-42.2C7.7,-43.9,15.4,-39.9,20.9,-34.4Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{transition: 'all 0.3s ease 0s'}} stroke="url(#sw-gradient)"></path>
    </svg>
  );
}

export default Blob;
