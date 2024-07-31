import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';

const images = [
    'https://imgs.search.brave.com/5737wLq74i65H0qMxSEFEeu8PgYAgBkcfKmFV0sca6c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk4L1BhbmphYl9V/bml2ZXJzaXR5X0Nh/bXB1cy5qcGc',
    'https://imgs.search.brave.com/5737wLq74i65H0qMxSEFEeu8PgYAgBkcfKmFV0sca6c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk4L1BhbmphYl9V/bml2ZXJzaXR5X0Nh/bXB1cy5qcGc',
    'https://imgs.search.brave.com/FSBh2OpChFhbgrgQIbxJNKCoyl6n8A-fuwVj5RNnrd4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzA3L0JveXMnX0hv/c3RlbCxfUGFuamFi/X1VuaXZlcnNpdHks/X0NoYW5kaWdhcmgu/anBn',
    'https://imgs.search.brave.com/5737wLq74i65H0qMxSEFEeu8PgYAgBkcfKmFV0sca6c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk4L1BhbmphYl9V/bml2ZXJzaXR5X0Nh/bXB1cy5qcGc',
    'https://imgs.search.brave.com/5737wLq74i65H0qMxSEFEeu8PgYAgBkcfKmFV0sca6c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk4L1BhbmphYl9V/bml2ZXJzaXR5X0Nh/bXB1cy5qcGc'
];

const HeroSection = () => {
    const sentences = [
        'Welcome to IIT Delhi',
        'Explore our campus life',
        'Learn about our research',
        'Join us for a brighter future'
    ];
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isTextVisible, setIsTextVisible] = useState(false);

    useEffect(() => {
        const typeAndEraseText = async () => {
            const fullText = sentences[currentSentenceIndex];

            // Typing animation
            setCurrentText(fullText);
            setIsTextVisible(true);
            await new Promise(resolve => setTimeout(resolve, 3000)); // Visible duration

            // Erasing animation
            setIsTextVisible(false);
            await new Promise(resolve => setTimeout(resolve, 2000)); // Delay before next sentence

            // Move to the next sentence
            setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
        };

        typeAndEraseText();
    }, [currentSentenceIndex]);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [hoveredImageLeft, setHoveredImageLeft] = useState(null);
    const [hoveredImageRight, setHoveredImageRight] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 4000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const handleHoverLeft = () => {
        setHoveredImageLeft((currentSlide - 1 + images.length) % images.length);
    };

    const handleHoverRight = () => {
        setHoveredImageRight((currentSlide + 1) % images.length);
    };

    const handleHoverOut = () => {
        setHoveredImageLeft(null);
        setHoveredImageRight(null);
    };

    const handlePrevClick = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };

    const handleNextClick = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    return (
        <div className="relative w-full h-screen mt-0 overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform:` translateX(${currentSlide * 100}%) `}}>
                {images.map((image, index) => (
                    <div className="w-full flex-shrink-0" key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} className="w-full h-screen object-cover" />
                    </div>
                ))}
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
                <span
                    className={`text-white text-4xl md:text-6xl font-bold font-roboto-slab tracking-wide ${isTextVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                        transition: 'opacity 1s ease-in-out',
                        transform: isTextVisible ? 'translateY(0)' : 'translateY(100%)'
                    }}
                >
                    {currentText}
                </span>
            </div>
            <button
                className="absolute top-1/2 w-20 h-20 rounded-full left-5 transform -translate-y-1/2 px-5 py-3 bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-all duration-300"
                onMouseOver={handleHoverLeft}
                onMouseOut={handleHoverOut}
                onClick={handlePrevClick}
                style={{
                    backgroundImage: hoveredImageLeft !== null ? `url(${images[hoveredImageLeft]})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </button>
            <button
                className="absolute top-1/2 w-20 h-20 rounded-full right-5 transform -translate-y-1/2 px-5 py-3 bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-all duration-300"
                onMouseOver={handleHoverRight}
                onMouseOut={handleHoverOut}
                onClick={handleNextClick}
                style={{
                    backgroundImage: hoveredImageRight !== null ?` url(${images[hoveredImageRight]})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </button>
        </div>
    );
};

export default HeroSection;