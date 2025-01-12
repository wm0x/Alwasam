"use client"
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (totalScroll / windowHeight) * 100;

    setScrollProgress(scrollPercentage);

    if (totalScroll > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15); // Scroll speed control (duration: 500ms)
    
    const scrollAnimation = () => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(scrollAnimation);
      }
    };
    requestAnimationFrame(scrollAnimation);
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 100,
          }}
        >
          {/* Scroll to Top Button */}
          <div style={{ position: 'relative', width: '60px', height: '60px' }} onClick={scrollToTop} className='cursor-pointer'>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(29, 29, 29, 0.6)',
                borderRadius: '50%',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <FaArrowUp />
            </div>
            {/* Progress Circle */}
            <svg
              style={{ position: 'absolute', top: 0, left: 0, transform: 'rotate(-90deg)' }} 
              width="60" 
              height="60"
            >
              <circle
                stroke="#882d37"
                strokeWidth="4"
                fill="transparent"
                r="28"
                cx="30"
                cy="30"
                style={{
                  strokeDasharray: `${2 * Math.PI * 28}`,
                  strokeDashoffset: `${2 * Math.PI * 28 - (scrollProgress / 100) * 2 * Math.PI * 28}`,
                  transition: 'stroke-dashoffset 0.1s linear',
                  strokeLinecap: 'round',
                }}
              />
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
