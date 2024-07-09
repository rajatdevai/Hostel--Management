// Home.jsx
import React from 'react';
import Navbar from '../Components/Navbar.jsx';
import Carousel from '../Components/Carousel.jsx';
import InfoBox from '../Components/InfoHome.jsx';
import Footer from '../footer/Foooter.js';  // Import Footer
import { FaBed, FaUtensils, FaWrench, FaUserShield } from 'react-icons/fa'; // Importing icons

const Home = () => {
    return (
        <div className="bg-primaryBlack min-h-screen flex flex-col">
            <Navbar />
            <Carousel />
            <div className="container mx-auto py-12 flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <InfoBox 
                        icon={<FaBed />} 
                        title="Comfortable Rooms" 
                        description="Our hostel offers comfortable and spacious rooms for all residents."
                    />
                    <InfoBox 
                        icon={<FaUtensils />} 
                        title="Mess Facilities" 
                        description="Enjoy delicious and nutritious meals at our hostel mess."
                    />
                    <InfoBox 
                        icon={<FaWrench />} 
                        title="Maintenance" 
                        description="We provide timely maintenance services for all hostel facilities."
                    />
                    <InfoBox 
                        icon={<FaUserShield />} 
                        title="Security" 
                        description="Our hostel is equipped with 24/7 security to ensure your safety."
                    />
                </div>
            </div>
            <Footer /> {/* Add Footer here */}
        </div>
    );
};

export default Home;
