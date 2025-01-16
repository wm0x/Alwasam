"use client";

import { useState, useEffect } from "react";

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const Images = [
    "../g90-removebg-preview.png",
    "../g90.jpg",
    "../logo-alwasam.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((img) => (img + 1) % Images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[300px] overflow-hidden relative">
      <img
        src={Images[currentImage]}
        alt="carousel"
        className="w-full h-full object-cover transition-all duration-500 ease-in-out"
      />
    </div>
  );
};

export default ImageCarousel;
