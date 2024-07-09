import React, { useState, useEffect } from 'react';

const Carousel = () => {
    const images = [
        'https://puchd.ac.in/photos/slide4.png',
        'https://puchd.ac.in/photos/slide4.png',
        'https://puchd.ac.in/photos/slide6.png',
        'https://puchd.ac.in/photos/slide6.png',
        'https://puchd.ac.in/photos/slide4.png',
        'https://puchd.ac.in/photos/slide4.png'
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        const newIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval); // Clear interval on component unmount
    }, [currentIndex]);

    return (
        <div className="carousel w-full overflow-hidden relative">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((src, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <img src={src} alt={`Carousel ${index + 1}`} className="w-full h-auto" />
                    </div>
                ))}
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 flex justify-between px-4">
                <button onClick={handlePrevious} className="bg-gray-800 text-white p-2 rounded-full">‹</button>
                <button onClick={handleNext} className="bg-gray-800 text-white p-2 rounded-full">›</button>
            </div>
        </div>
    );
};

export default Carousel;
