import React, { useState, useEffect } from 'react';

export default function ProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight * 100;
      setScrollPercentage(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '2px',
      backgroundColor: '#ddd',
      zIndex: 50
    }}>
      <div style={{
        width: `${scrollPercentage}%`,
        height: '100%',
        backgroundColor: 'orangered',
        transition: 'width 0.1s'
      }} />
    </div>
  );
}