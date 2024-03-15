import React from 'react';

const Footer = () => {
  return (
    <div className='Footer flex justify-between items-end p-3' style={{background: '#77d1cb'}}>
      <a href="https://ux-fuer-ki.de/impressum.html" className='hover:underline'>Impressum</a>
      <a href="https://www.uni-luebeck.de/universitaet/universitaet.html" className='hover:underline'>Universität zu Lübeck</a>
    </div>
  )
};

export default Footer;